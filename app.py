#!/usr/bin/python3

from flask import Flask, render_template, request, redirect, url_for, session 
from hashlib import sha256
import json
import contracts
from contracts import *
from flask_cors import CORS

from passlib.hash import pbkdf2_sha256
from pymongo import MongoClient

# Establishing the connection
username = "kimxons"
password = "22Hotels*"

srv = "mongodb+srv://{}:{}@cluster0.lqvga.mongodb.net/test?retryWrites=true&w=majority".format(
    username, password)

client = MongoClient(srv, connect=False)

print("The Connection Established")

db = client['Authenication']
login_collection = db['Login']

def Register(email, name, password, category, hashc):
    q1 = {"email": email}
    p = db.login_collection.find(q1)
    check = False

    for i in p:
        if email == i['email']:
            check = True

    if check:
        print("email address exists in the database")
        return False
        
    else:
        password = pbkdf2_sha256.hash(password)
        q2 = {"name": name, "email": email,
              "password": password, 'hash': hashc}
        q2['category'] = category

        r = db.login_collection.insert_one(q2)
        return True


def Login(email, password):
    l1 = {"email": email}
    res = db.login_collection.find(l1)

    data = {}
    data['check'] = False
    for i in res:
        if pbkdf2_sha256.verify(password, i['password']):
            data['name'] = i['name']
            data['category'] = i['category']
            data['check'] = True
            data['hash'] = i['hash']
    print(data)
    return data

# app 
app = Flask(__name__, static_url_path='/static')
CORS(app)

app.debug = True
app.secret_key = "hello"

@app.route("/admin")
def admin():
    return render_template('features/_features.html')

@app.route('/approve')
def approvve():
    return render_template("features/approve.html")

def base(request):
    owner = contract.functions.owner().call()
    print(owner)
    doctorList = []
    docIds = getDoctorId()
    for docId in docIds:
        doctor = contract.functions.doctorDetailList(docId).call()
        doctorList.append(doctor)
    
    context = {
        "doctors":doctorList
    }
    return render(request,'index.html',context)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login")
def login():
    if "name" in session:
        if session["category"] == "Supplier":
            return redirect(url_for('supplier'))
        elif session["category"] == "Buyer":
            return redirect(url_for('buyer'))
        else:
            return redirect(url_for('index'))
    return render_template("login.html")

@app.route("/supplier")
def Supplier():
    if "name" in session:
        if session["category"] == "Supplier":
            return render_template("/supplier/home.html", name=session["name"])
            # return render_template("/supplier/home.html")
        return redirect(url_for('login'))

    else:
        return redirect(url_for('index'))
    
@app.route("/buyer")
def Buyer():
    if "name" in session:
        if session["category"] == "Buyer":
            return render_template("/consumer/home.html", name=session["name"])
        return redirect("/login")
    else:
        return redirect("/")

# Ajax Routes for forms
@app.route('/login_action', methods=['POST'])
def login_action():
    email = request.form['email']
    password = request.form['password']
    print(email, password)
    data = Login(email, password)

    link_map = {"Supplier": '/supplier',"Buyer":"/buyer"}

    if data['check']:
        data['link'] = link_map[data['category']]
        session['name'] = data['name']
        session['category'] = data['category']
        session['hash'] = data['hash']
        return data
    return data

@app.route('/sign_action', methods=['POST'])
def sign_action():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']
    category = request.form['category']
    hashc = sha256(email.encode('utf-8')).hexdigest()[-20:]

    link_map = {'Supplier': '/supplier', "Buyer": '/buyer'}

    data = {}
    data['check'] = False
    print(name, email, password, category)
    
    if Register(email, name, password, category, hashc):
        data['check'] = True
        data['link'] = link_map[category]

        session['name'] = name
        session['category'] = category
        session['hash'] = hashc
        return data
    return data

@app.route("/logout")
def logout():
    session.pop('name',None)
    return redirect(url_for("index"))

@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404

@app.route("/track")
def track():
    if 'name' in session:
        return render_template('consumer/track.html',name=session['name'])

@app.route("/addProduct")
def addProduct():
    if 'name' in session:
        if session["category"] == "Supplier":
            return render_template('addProduct.html',name=session['name'])
        else:
            return redirect("/supplier")

def getDoctorId():
    docIds = []
    count = contract.functions.doctorCount().call()
    for i in range(count):
        docId = contract.functions.docAddressList(i+1).call()
        docIds.append(docId)
    return docIds

def getPatientId():
    pidList = []
    count = contract.functions.pidCount().call()
    for i in range(count):
        pids = contract.functions.pidList(i+1).call()
        pidList.append(pids)
    return pidList

@app.route('/market')
def market():
    patientsList = []
    docs = getDoctorId()
    pids = getPatientId()
    for pid in pids:
        patient=contract.functions.patientList(pid).call()
        patientsList.append(patient)
    new_list = []
    for data in patientsList:
        old_time = int(data[0])
        real_time = datetime.utcfromtimestamp(old_time).strftime('%Y-%m-%d %H:%M:%S')
        data[0]=real_time
        new_list.append(data)
    context = {
        "patients":new_list,
        "doctors":docs
    }
    return render_template(request,'market.html',context)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)