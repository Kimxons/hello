$(document).ready(function() {
    const ContractAddress = '0x4b21C8c23b27F41C751fE3d9E3fDF3C6a18449C4';

    const ContractABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_productSubmissionId",
        "type": "uint256"
      }
    ],
    "name": "registeredProductEvent",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "PresentCondition",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deliveryDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "paymentDate",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "nextHolder",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "orderAmount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "Status",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "buyer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "checkContractIsRunning",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getApprovalSeller",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBuyer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBuyerApproval",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDeliveryDate",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOrderAmt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPaymentDate",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "getPresentStatus",
    "outputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_deliveryDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_paymentDate",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_seller",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_orderAmount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_status",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSeller",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSuppliers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "invoices",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "init",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "number",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "init",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "productHashes",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "productsAddressMap",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "productsMap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ProductInfo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "supplierDetails",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "submissionDate",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "BlockNumber",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "currentOwner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "productsubmissions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ProductInfo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "supplierDetails",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "submissionDate",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "BlockNumber",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "currentOwner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "registrations",
    "outputs": [
      {
        "internalType": "contract Registrations",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "seller",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bool",
        "name": "_approvalBuyer",
        "type": "bool"
      }
    ],
    "name": "setApprovalBuyer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bool",
        "name": "_approvalSeller",
        "type": "bool"
      }
    ],
    "name": "setApprovalSeller",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      }
    ],
    "name": "setBuyer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_orderAmt",
        "type": "uint256"
      }
    ],
    "name": "setOrderAmt",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bool",
        "name": "_orderCompletion",
        "type": "bool"
      }
    ],
    "name": "setOrderCompletion",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_seller",
        "type": "address"
      }
    ],
    "name": "setSeller",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "toggleContractActive",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

var CONSTANTS = {
  HOME_PRODUCT_MENU_BUTTON: "#homeProductMenuButton",
  UPLOAD_PRODUCT_MENU_BUTTON: "#uploadProductMenuButton",
  VERIFY_PRODUCT_MENU_BUTTON: "#verifyProductMenuButton",
  RETRIEVE_PRODUCT_MENU_ADDRESS_BUTTON: "#retrieveProductMenuButton",
  DESTROY_CONTRACT_MENU_BUTTON: "#destroyContractMenuButton",
  TOGGLE_CONTRACT_STATUS_MENU_BUTTON : "#toggleContractStatusMenuButton",
  CHECK_CONTRACT_STATUS_MENU_BUTTON : "#checkContractStatusMenuButton",

  VERIFY_PRODUCT: "#homeProductMenuButton",
  UPLOAD_PRODUCT_MENU_BUTTON: "#uploadProductMenuButton",
  VERIFY_PRODUCT_MENU_BUTTON: "#verifyProductMenuButton",
  RETRIEVE_PRODUCT_MENU_ADDRESS_BUTTON: "#retrieveProductMenuButton",
  DESTROY_CONTRACT_MENU_BUTTON: "#destroyContractMenuButton",
  TOGGLE_CONTRACT_STATUS_ROW: "#toggleContractStatusMenuButton",
  CHECK_CONTRACT_STATUS_MENU_BUTTON: "#checkContractStatusMenuButton",

  VERIFY_PRODUCT: "#verifyProductRow",
  VERIFY_PRODUCT_FORM: "#verifyProductForm",
  VERIFY_PRODUCT_INPUT_CHECKBOX_TERMS: "#verifyProductInputCheckboxTerms",
  VERIFY_PRODUCT_INPUT_FILE_SIZE: "#verfiyProductFileSize",
  VERIFY_PRODUCT_LABEL_FILE: "#verifyProductLabelFile",
  VERIFY_PRODUCT_BUTTON_SUBMIT: "#verifyProductButtonSubmit",

  RETRIEVE_PRODUCT_ADDRESS: "#retrieveProductAddressRow",
  RETRIEVE_PRODUCT_ADDRESS_FORM: "#retrieveProductAddressForm",
  RETRIEVE_PRODUCT_ADDRESS_INPUT_CHECKBOX_TERMS: "#retrieveProductAddressInputCheckboxTerms",
  RETRIEVE_PRODUCT_ADDRESS_INPUT_FILE: "#retrieveProductAddressInputFile",
  RETRIEVE_PRODUCT_ADDRESS_LABEL_FILE: "#retrieveProductAddressLabelFile",
  RETRIEVE_PRODUCT_ADDRESS_BUTTON_SUBMIT: "#retrieveProductAddressButtonSubmit",

  UPLOAD_PRODUCT: "#uploadProductRow",
  UPLOAD_PRODUCT_FORM: "#uploadProductForm",
  UPLOAD_PRODUCT_INPUT_CHECKBOX_AUTH: "#uploadProductInputCheckboxAuthorised",
  UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_TERMS: "#uploadProductInputCheckboxTerms",
  UPLOAD_PRODUCT_INPUT_FILE: "#uploadProductInputFile",
  UPLOAD_PRODUCT_LABEL_FILE: "#uploadProductLabelFile",
  UPLOAD_PPRODUCT_PRODUCT_NUM_SELECTED: "#uploadProductSelectProductNum  :selected",
  UPLOAD_PRODUCT_PRODUCT_SUBMITTED_BY: "#uploadProductInputTextSubmittedBy",
  UPLOAD_PRODUCT_PRODUCT_SUBMITTED_BY_ID: "#uploadProductInputTextIDNum",
  UPLOAD_PRODUCT_PRODUCT_SUPPLIER_ID: "#uploadProductInputTextSupplierID",
  UPLOAD_PRODUCT_BUTTON_SUBMIT: "#uploadProductButtonSubmit",

  GET_PRODUCT_COUNT_ROW: "#getProductCountRow",
  PRODUCT_COUNT_BUTTON: "#productCountButton",
  PRODUCT_COUNT_DIV: "#productCount",

  CHECK_CONTRACT_STATUS_ROW: "#checkContractStatusRow",
  CHECK_CONTRACT_STATUS_BUTTON: "#checkContractStatusButton",
  CHECK_CONTRACT_STATUS_DIV: "#checkContractStatus",

  TOGGLE_CONTRACT_STATUS_ROW: "#toggleContractStatusRow",
  TOGGLE_CONTRACT_STATUS_BUTTON: "#toggleContractStatusButton",
  TOGGLE_CONTRACT_STATUS_DIV: "#toggleContractStatus",

  DESTROY_CONTRACT_ROW: "#destroyContractRow",
  DESTROY_CONTRACT_BUTTON: "#destroyContractButton",
  DESTROY_CONTRACT_DIV: "#destroyContract",

  LOADING : "#loadingRow",
  NOTIFICATION_BAR_ROW: "#notificationBarRow",
  HOW_IT_WORKS: "#howItWorksTenderDocsRow",
  NOTIFICATION_BAR_DIV: "#divNotificationBar",
  CURRENT_ETHEREUM_ACCOUNT_DIV: "#currentEtheremAccountDiv",

  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",

  CHOOSE_A_FILE_LABEL: "Choose a product image to upload...",
  EMPTY_STRING: "",
  KILO: 1000,
  MEGA: 1000000
};

  $(CONSTANTS.HOME_PRODUCT_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.HOW_IT_WORKS, CONSTANTS.EMPTY_STRING) 
  });

  $(CONSTANTS.UPLOAD_PRODUCT_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.UPLOAD_PRODUCT, CONSTANTS.UPLOAD_PRODUCT_FORM) 
  });

  $(CONSTANTS.VERIFY_PRODUCT_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.VERIFY_PRODUCT, CONSTANTS.VERIFY_PRODUCT_FORMM) 
  });

  $(CONSTANTS.RETRIEVE_PRODUCT_MENU_ADDRESS_BUTTON).click(function() {
    displayRow(CONSTANTS.RETRIEVE_PRODUCT_MENU_ADDRESS_BUTTON, CONSTANTS.RETRIEVE_PRODUCT_ADDRESS_FORM) 
  });

  $(CONSTANTS.GET_TENDER_DOCS_COUNT_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.GET_PRODUCT_COUNT_ROW,CONSTANTS.EMPTY_STRING) 
  });

  $(CONSTANTS.CHECK_CONTRACT_STATUS_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.CHECK_CONTRACT_STATUS_ROW,CONSTANTS.EMPTY_STRING) 
  });

  $(CONSTANTS.TOGGLE_CONTRACT_STATUS_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.TOGGLE_CONTRACT_STATUS_ROW,CONSTANTS.EMPTY_STRING) 
  });

  $(CONSTANTS.DESTROY_CONTRACT_MENU_BUTTON).click(function() {
    displayRow(CONSTANTS.DESTROY_CONTRACT_ROW,CONSTANTS.EMPTY_STRING) 
  });

  // work on this ASAP 
  $(CONSTANTS.UPLOAD_PRODUCT_BUTTON_SUBMIT).click(uploadTenderZIP);

  // call verifyTenderZIP function on button click
  $(CONSTANTS.VERIFY_TENDER_DOCS_BUTTON_SUBMIT).click(verifyTenderZIP);

  // call retrieveTenderZIPAddress function on button click
  $(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_BUTTON_SUBMIT).click(retrieveTenderZIPAddress);

     // trigger smart contract call to getTenderSubmissionsCount() function after clicking on tender docs count button
  $(CONSTANTS.TENDER_DOCS_COUNT_BUTTON).click(function (e) {
    e.preventDefault();
    getTenderDocsCount();
  });

  // trigger smart contract call to destroyContract() function after clicking on Initiate Self Destruct button
  $(CONSTANTS.DESTROY_CONTRACT_BUTTON).click(function (e) {
    e.preventDefault();
    destroyContract();
  });

  // trigger smart contract call to toggleContractStatus() function after clicking on toggle contract status button
  $(CONSTANTS.TOGGLE_CONTRACT_STATUS_BUTTON).click(function (e) {
    e.preventDefault();
    toggleContractStatus();
  });

  // trigger smart contract call to getContractStatus() function after clicking on check contract status button
  $(CONSTANTS.CHECK_CONTRACT_STATUS_BUTTON).click(function (e) {
    e.preventDefault();
    getContractStatus();
  });

  displayRow(CONSTANTS.HOW_IT_WORKS, CONSTANTS.EMPTY_STRING);

  // Show/Hide a "loading" indicator when AJAX request starts/completes:
  $(document).on({
      ajaxStart: function() { $(CONSTANTS.LOADING).show() }, //ajaxStart specifies a function to run when the first AJAX request begins
      ajaxStop: function() { $(CONSTANTS.LOADING).hide() } //ajaxStop specifies a function to run when all AJAX requests have completed
  });

  // update file input label to selected file
  $(CONSTANTS.VERIFY_TENDER_DOCS_INPUT_FILE_ZIP).on('change',function(){
      //get the file name
      var fileName = $(this).val();
      //replace the "Choose a file" label
      $(this).next(CONSTANTS.VERIFY_TENDER_DOCS_LABEL_FILE_ZIP).html(fileName);
  });

  // update file input label to selected file
  $(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_INPUT_FILE_ZIP).on('change',function(){
      //get the file name
      var fileName = $(this).val();
      //replace the "Choose a file" label
      $(this).next(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_LABEL_FILE_ZIP).html(fileName);
  });

  // update file input label to selected file
  $(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_FILE_ZIP).on('change',function(){
      //get the file name
      var fileName = $(this).val();
      //replace the "Choose a file" label
      $(this).next(CONSTANTS.UPLOAD_TENDER_DOCS_LABEL_FILE_ZIP).html(fileName);
  });

  //function to trigger notification bar at the top of the page
  function triggerNotificationOpen(parentDivID, alertDivID, alertMessage, alertType) {
    console.log("triggerNotificationOpen");
    $(CONSTANTS.NOTIFICATION_BAR_ROW).show();
    if (alertType === CONSTANTS.SUCCESS)
      var divNotificationHtml = '<div id='+alertDivID+' class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>'+alertMessage+'</strong></div>';
    else if (alertType === CONSTANTS.ERROR)
       var divNotificationHtml = '<div id='+alertDivID+' class="alert alert-danger fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>'+alertMessage+'</strong></div>';
    else if (alertType === CONSTANTS.WARNING)
        var divNotificationHtml = '<div id='+alertDivID+' class="alert alert-warning fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>'+alertMessage+'</strong></div>';
    //console.log(divNotificationHtml);
    $(parentDivID).html(divNotificationHtml);
  };

  //function to handle error from smart contract call
  function handle_error(err) {
      console.log("function handle_error(err).");
      var message_type = CONSTANTS.ERROR; //error or success
      var error_data = err.data;
      var message_description = "Tender Submission Registry smart contract call failed: " + err;
      if (typeof error_data !== 'undefined'){
          var error_message = error_data.message;
          if (typeof error_message !== 'undefined')
          {
              message_description = "Tender Submission Registry smart contract call failed: " + error_message;
          }
      }

      // trigger notification
      triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
      return console.log(message_description);
  };

  //function to dispaly current ethereum account
  async function getCurrentEthereumAccount() {
      if (window.ethereum)
    try {
      await window.ethereum.enable();
    } catch (err) {
              var message_type = CONSTANTS.ERROR; //error or success
              var message_description = "Access to your Ethereum account rejected.";

              //trigger notification
              triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
              return console.log(message_description);
    }

      if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

      var currentAccount = web3.eth.accounts[0];
      console.log("currentAccount " + currentAccount);

      var currentEthereumAccountHtml = '<p> Logged on as: ' + currentAccount +'</p>';
      $(CONSTANTS.CURRENT_ETHEREUM_ACCOUNT_DIV).html(currentEthereumAccountHtml);
  };

  var account = web3.currentProvider.selectedAddress

  //function to handle web 3 undefined error from smart contract call
  function handle_web3_undefined_error() {
      console.log("function handle_web3_undefined_error(err).");
      var message_type = CONSTANTS.ERROR; //error or success
      var message_description = "Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.";

      //trigger notification
      triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
      return console.log(message_description);
  };

  //function to display row based on menu button selection
  function displayRow(rowName, formName) {
      // Hide rows
      $(CONSTANTS.LOADING).hide();
      $(CONSTANTS.HOW_IT_WORKS).hide();
      $(CONSTANTS.UPLOAD_PRODUCT).hide();
      $(CONSTANTS.VERIFY_PRODUCT).hide();
      $(CONSTANTS.RETRIEVE_PRODUCT_ADDRESS).hide();
      $(CONSTANTS.GET_PRODUCT_COUNT_ROW).hide();
      $(CONSTANTS.NOTIFICATION_BAR_ROW).hide();
      $(CONSTANTS.CHECK_CONTRACT_STATUS_ROW).hide();
      $(CONSTANTS.TOGGLE_CONTRACT_STATUS_ROW).hide();
      $(CONSTANTS.DESTROY_CONTRACT_ROW).hide();

      // reset custom notifications
      $(CONSTANTS.PRODUCT_COUNT_DIV).html(CONSTANTS.EMPTY_STRING);
      $(CONSTANTS.DESTROY_CONTRACT_DIV).html(CONSTANTS.EMPTY_STRING);
      $(CONSTANTS.TOGGLE_CONTRACT_STATUS_DIV).html(CONSTANTS.EMPTY_STRING);
      $(CONSTANTS.CHECK_CONTRACT_STATUS_DIV).html(CONSTANTS.EMPTY_STRING);

      //reset form fields
      console.log("formName " + formName);
      if (formName !== CONSTANTS.EMPTY_STRING) {
          $(formName).get(0).reset();

          //reset file upload field label
          if (formName === CONSTANTS.VERIFY_PRODUCT_FORMM){
              $(CONSTANTS.VERIFY_PRODUCT_LABEL_FILE).html(CONSTANTS.CHOOSE_A_FILE_LABEL);
          }

          //reset file upload field label
          if (formName === CONSTANTS.RETRIEVE_PRODUCT_ADDRESS_FORM){
              $(CONSTANTS.RETRIEVE_PRODUCT_ADDRESS_LABEL_FILE).html(CONSTANTS.CHOOSE_A_FILE_LABEL);
          }

          //reset file upload field label
          if (formName === CONSTANTS.UPLOAD_PRODUCT_FORM){
              $(CONSTANTS.UPLOAD_PRODUCT_LABEL_FILE).html(CONSTANTS.CHOOSE_A_FILE_LABEL);
          }

      }

      // Display current ethereum account - from Metamask wallet
      getCurrentEthereumAccount();

      // Display the passed in row
      $(rowName).show();
  }

  // function to upload Tender ZIP file
  async function uploadTenderZIP() {
      $(CONSTANTS.NOTIFICATION_BAR_ROW).hide();

      if ($(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_FILE_ZIP)[0].files.length == 0){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please select a Tender Documents ZIP file to upload.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

      //console.log("CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_AUTH " + $(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_AUTH)[0].checked);
      //console.log("CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_TERMS " + $(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_TERMS)[0].checked);

      if ($(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_AUTH)[0].checked === false){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please confirm that you are authorised to upload this bid.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

      if ($(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_CHECKBOX_TERMS)[0].checked === false){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please confirm that you agree with the Terms and Conditions.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

  if (window.ethereum)
    try {
      await window.ethereum.enable();
    } catch (err) {
              var message_type = CONSTANTS.ERROR; //error or success
              var message_description = "Access to your Ethereum account rejected.";

              //trigger notification
              triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
              return console.log(message_description);
    }
      let fileReader = new FileReader();
      let zip_filename = $(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_FILE_ZIP)[0].files[0].name;
      let zip_filesize = ($(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_FILE_ZIP)[0].files[0].size)/CONSTANTS.MEGA;
      let webZipFileDetails = "ZIP File  " + zip_filename + " (size " + zip_filesize + "MB)";

      // Get selected value in dropdown list using JavaScript
      // $("#elementId :selected").text(); // The text content of the selected option
      // $("#elementId :selected").val(); // The value of the selected option
      let tender_num = $(CONSTANTS.UPLOAD_TENDER_DOCS_TENDER_NUM_SELECTED).text();

      let supplier_submitter_fullname = $(CONSTANTS.UPLOAD_TENDER_DOCS_TENDER_SUBMITTED_BY).val();
      let supplier_submitter_id = $(CONSTANTS.UPLOAD_TENDER_DOCS_TENDER_SUBMITTED_BY_ID).val();
      let supplier_id = $(CONSTANTS.UPLOAD_TENDER_DOCS_TENDER_SUPPLIER_ID).val();
      let supplier_details = '{SubmitterFullName:'+supplier_submitter_fullname + ', ' +
                             ' SubmitterIdentificationNumber: ' + supplier_submitter_id +
                             ' SupplierID: ' + supplier_id + '}';
      //let supplier_details = '{SubmitterFullName:"John Doe", SubmitterIdentificationNumber:"12345678",SupplierID:123}';


      let submission_date = new String(Date());

      fileReader.onload = function() {
          let documentHash = sha256(fileReader.result);
          if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

          console.log("ZIP File  " + zip_filename + " (size " + zip_filesize + "MB) successfully hashed (hash value "
              + documentHash + ").");


          console.log("Test before sumbit - webZipFileDetails: " + webZipFileDetails + ", documentHash: " +  documentHash +
                  ", tender_num: " + tender_num  + ",supplier_details: " + supplier_details + ", submission_date:" + submission_date);

          //Load the contract schema from the abi and Instantiate the contract by address
          // at(): Create an instance of MyContract that represents your contract at a specific address.
          // deployed(): Create an instance of MyContract that represents the default address managed by MyContract.
          // new(): Deploy a new version of this contract to the network, getting an instance of MyContract that represents the newly deployed instance.

          let contract = web3.eth.contract(documentRegistryContractABI).at(documentRegistryContractAddress);
          contract.registerTenderSubmission(webZipFileDetails, documentHash, tender_num, supplier_details, submission_date.toString(),
              function(err, result) {
          if (err){
              return handle_error(err);
          }

          var message_type = CONSTANTS.SUCCESS; //error or success
          var message_description = `Transaction submitted to Blockchain for processing (Upload Tender Documents ${webZipFileDetails} with hash ${documentHash}). Check your Metamask for transaction update.`;

          //reset upload form
          $(CONSTANTS.UPLOAD_TENDER_DOCS_FORM).get(0).reset();
          $(CONSTANTS.UPLOAD_TENDER_DOCS_LABEL_FILE_ZIP).html(CONSTANTS.CHOOSE_A_FILE_LABEL);

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
          console.log(message_description);
          });
      };
      fileReader.readAsBinaryString($(CONSTANTS.UPLOAD_TENDER_DOCS_INPUT_FILE_ZIP)[0].files[0]);
  };

   // function to verify Tender ZIP file
  function verifyTenderZIP() {
      $(CONSTANTS.NOTIFICATION_BAR_ROW).hide();

      if ($(CONSTANTS.VERIFY_TENDER_DOCS_INPUT_FILE_ZIP)[0].files.length == 0){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please select a Tender Documents ZIP file to verify.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

       if ($(CONSTANTS.VERIFY_TENDER_DOCS_INPUT_CHECKBOX_TERMS)[0].checked === false){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please confirm that you agree with the Terms and Conditions.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

      //The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers)
      //stored on the user's computer, using File or Blob objects to specify the file or data to read.
      //File objects may be obtained from a FileList object returned as a result of a user selecting files using the
      // <input> element, from a drag and drop operation's DataTransfer object, or from the mozGetAsFile() API on an
      // HTMLCanvasElement.

      let fileReader = new FileReader();
      let zip_filename = $(CONSTANTS.VERIFY_TENDER_DOCS_INPUT_FILE_ZIP)[0].files[0].name;
      let zip_filesize = ($(CONSTANTS.VERIFY_TENDER_DOCS_INPUT_FILE_ZIP)[0].files[0].size)/CONSTANTS.MEGA;
      let webZipFileDetails = "ZIP File  " + zip_filename + " (size " + zip_filesize + "MB)";

      fileReader.onload = function() {
          let documentHash = sha256(fileReader.result); //fileReader.result is base64 encoded source of the file
          if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

          console.log(webZipFileDetails + " successfully hashed (hash value "+ documentHash + ").");

          let contract = web3.eth.contract(documentRegistryContractABI).at(documentRegistryContractAddress);
          contract.getTenderSubmission(documentHash, function(err, result) {
              if (err){
                  return handle_error(err);
                  // var message_type = CONSTANTS.ERROR; //error or success
                  // var error_message = err.data.message;
                  // var message_description = "Tender Submission Registry smart contract call failed: " + err;
                  // if (error_message !== 'undefined'){
                  //     message_description = "Tender Submission Registry smart contract call failed: " + err.data.message;
                  // }
                  //
                  // //trigger notification
                  // triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
                  // return console.log(message_description);
              }

              //result:
              // ZIPFileDetails: ZIP File  test.zip (size 0.433993MB),
              // ZIPFileHash: f149d75e984f1e919c4b896a0701637ff0260b834e1c18f3a9776c12fbf82311,
              // TenderSummary: 1003 - Train Data Center Operators,
              // SupplierDetails: 123,
              // SubmissionDate: Wed Feb 05 2020 00:09:56 GMT+0200 (South Africa Standard Time),
              // SubmissionBlocknumber: 1,
              // IsSet: 1

              // Output from the contract function call
              console.log("result: " + result);

              let contractIsSet = result[6].toNumber();

              console.log("contractIsSet: " + contractIsSet);
              console.log("result[0]: " + result[0]);
              console.log("(contractIsSet > 0): " + (contractIsSet > 0));

              // if the hash is not in the smart contracts tenderMap, then isSet will not be 1
              if (contractIsSet > 0) {
                  let contractZIPFileDetails = result[0];
                  let contractZIPFileHash = result[1];
                  let contractTenderSummary = result[2];
                  let contractSupplierDetails = result[3];
                  let contractSubmissionDate = result[4];
                  let contractSubmissionBlocknumber = result[5];
                  // let contractSubmissionBlocktime = result[5];
                  // let displayDate = new Date(contractSubmissionBlocktime * 1000).toLocaleString();

                  var message_type = CONSTANTS.SUCCESS; //error or success
                  var message_description =`Tender Documents ${webZipFileDetails} with hash ${documentHash} is <b>valid</b>. Uploaded to Tender Submission Registry (Blockchain) on: ${contractSubmissionDate}.` +
                                            `BlockNumber ${contractSubmissionBlocknumber}. Tender Summary: ${contractTenderSummary}. Supplier Details: ${contractSupplierDetails}.`;

                  // reset verify form
                  $(CONSTANTS.VERIFY_TENDER_DOCS_FORM).get(0).reset();
                  $(CONSTANTS.VERIFY_TENDER_DOCS_LABEL_FILE_ZIP).html(CONSTANTS.CHOOSE_A_FILE_LABEL);

                  // trigger notification
                  triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
                  return console.log(message_description);
              }
              else
                  var message_type = CONSTANTS.ERROR; //error or success
                  var message_description =`Tender Documents ${webZipFileDetails} with hash ${documentHash} is <b>invalid</b>: not found in the Tender Submission Registry (Blockchain).`;

                  // trigger notification
                  triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
                  return console.log(message_description);
          });
      };
      fileReader.readAsBinaryString($(CONSTANTS.VERIFY_TENDER_DOCS_INPUT_FILE_ZIP)[0].files[0]);
  };

  // function to retrieve a submitted Tender ZIP file's submitter address
  function retrieveTenderZIPAddress() {
      $(CONSTANTS.NOTIFICATION_BAR_ROW).hide();

      if ($(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_INPUT_FILE_ZIP)[0].files.length == 0){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please select a Tender Documents ZIP file to retrieve submitter address.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

       if ($(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_INPUT_CHECKBOX_TERMS)[0].checked === false){
          var message_type = CONSTANTS.ERROR; //error or success
          var message_description = "Please confirm that you agree with the Terms and Conditions.";

          //trigger notification
          triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divUploadTenderZIPAlert"', message_description, message_type);
          return console.log(message_description);
      }

      let fileReader = new FileReader();
      let zip_filename = $(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_INPUT_FILE_ZIP)[0].files[0].name;
      let zip_filesize = ($(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_INPUT_FILE_ZIP)[0].files[0].size)/CONSTANTS.MEGA;
      let webZipFileDetails = "ZIP File  " + zip_filename + " (size " + zip_filesize + "MB)";

      fileReader.onload = function() {
          let documentHash = sha256(fileReader.result); //fileReader.result is base64 encoded source of the file
          if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

          console.log(webZipFileDetails + " successfully hashed (hash value "+ documentHash + ").");

          let contract = web3.eth.contract(documentRegistryContractABI).at(documentRegistryContractAddress);
          contract.getTenderSubmitterAddress(documentHash, function(err, result) {
              if (err){
                  return handle_error(err);
              }
              // Output from the contract function call
              console.log("result: " + result);

              if (result === '0x0000000000000000000000000000000000000000'){
                  var message_type = CONSTANTS.ERROR; //error or success
                  var message_description =`Tender Documents ${webZipFileDetails} with hash ${documentHash} is <b>invalid</b>: no corresponding submitter address found in the Tender Submission Registry (Blockchain).`;

                  // trigger notification
                  triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
                  return console.log(message_description);
              }
              else {
                  var message_type = CONSTANTS.SUCCESS; //error or success
                  var message_description =`Tender Documents ${webZipFileDetails} with hash ${documentHash} is <b>valid</b>. Uploaded to Tender Submission Registry (Blockchain) by address : ${result}.`;

                  // reset verify form
                  $(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_FORM).get(0).reset();
                  $(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_LABEL_FILE_ZIP).html(CONSTANTS.CHOOSE_A_FILE_LABEL);

                  // trigger notification
                  triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
                  return console.log(message_description);
              }
          });
      };
      fileReader.readAsBinaryString($(CONSTANTS.RETRIEVE_TENDER_DOCS_ADDRESS_INPUT_FILE_ZIP)[0].files[0]);
  };

  // function to get count of Tender ZIP files that have been previously uploaded
  function getTenderDocsCount() {
      if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

      let contract = web3.eth.contract(documentRegistryContractABI).at(documentRegistryContractAddress);
      contract.getTenderSubmissionsCount(function(err, result) {
          if (err){
              return handle_error(err);
          }

          let tenderSubmissionsCount = result.toNumber(); // Output from the contract function call

          console.log("getTenderSubmissionsCount: " + tenderSubmissionsCount);

          // trigger a custom notification directly above the count button
          var tenderSubmissionsCountHtml = '<div class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Number of Tender Submissions: </strong>' + tenderSubmissionsCount +'</div>'
          $(CONSTANTS.TENDER_DOCS_COUNT_DIV).html(tenderSubmissionsCountHtml);

          // trigger notification (which is above the page title)
          // var message_type = CONSTANTS.SUCCESS; //error or success
          // var message_description =`<b>Number of Tender Submissions:</b>  ${tenderSubmissionsCount}.`;

          // triggerNotificationOpen(CONSTANTS.NOTIFICATION_BAR_DIV, '"divVerifyTenderZIPAlert"', message_description, message_type);
      });
  };

  // function to check Contract Status - stopped or not stopped
  function getContractStatus() {
      if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

      let contract = web3.eth.contract(documentRegistryContractABI).at(documentRegistryContractAddress);
      contract.checkContractIsRunning(function(err, result) {
          if (err){
              return handle_error(err);
          }

          console.log("Is Contract currently stopped " + result);

          // trigger a custom notification directly above the count button
          var contractStatusHtml = '<div class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>TSR Contract running status: </strong>' + !result +'</div>'
          $(CONSTANTS.CHECK_CONTRACT_STATUS_DIV).html(contractStatusHtml);
      });
  };

  // function to toggle contract status between stopped and not stopped
  function toggleContractStatus() {
      if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

      let contract = web3.eth.contract(ContractABI).at(ContractAddress);
      contract.checkContractIsRunning(function(err, result) {
          if (err) {
              return handle_error(err);
          };
          var original_contract_status = result;
          console.log("Is the Contract currently stopped before toggle: " + original_contract_status);

          contract.toggleContractActive(function(err2, result2) {
              if (err2){
                  return handle_error(err2);
              };
              var new_contract_status = !original_contract_status;

              // trigger a custom notification directly above the count button
              var toggleContractStatusHtml = '<div class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Contract status toggled. Transaction submitted to Blockchain for processing (Contract running status: </strong>' + !new_contract_status +'</div>). Check your Metamask for transaction update.'
              $(CONSTANTS.TOGGLE_CONTRACT_STATUS_DIV).html(toggleContractStatusHtml);
          });
      });
  };

  // function to initiate selfdestruct
  function destroyContract() {
      if (typeof web3 === 'undefined'){
              return handle_web3_undefined_error();
          }

      let contract = web3.eth.contract(ContractABI).at(ContractAddress);
      contract.destroy(function(err, result) {
          if (err){
              return handle_error(err);
          }

          console.log("result: " + result);

          // trigger a custom notification directly above the count button
          if (typeof result !== 'undefined')
          {
              var destroyContractHtml = '<div class="alert alert-success fade in show"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Contract destroy initiated </strong>' + result +'</div>'
              $(CONSTANTS.DESTROY_CONTRACT_DIV).html(destroyContractHtml);
          }
      });
  };
});
