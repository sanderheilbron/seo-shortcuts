// Saves options to chrome.storage.sync
function saveOptions() {
  var countryVersion = document.getElementById("countryVersion").value || "";
  var interfaceLanguage =
    document.getElementById("interfaceLanguage").value || "";
  var autoRun = document.getElementById("autoRun").checked;
  chrome.storage.sync.set(
    {
      countryVersion: countryVersion,
      interfaceLanguage: interfaceLanguage,
      autoRun: autoRun
    },
    function() {
      // Update status to let user know options were saved
      var status = document.getElementById("status");
      status.textContent = "Options saved";
      setTimeout(function() {
        status.textContent = "";
      }, 1500);
    }
  );
}

// Loads options from chrome.storage.sync
function loadOptions() {
  chrome.storage.sync.get(
    ["countryVersion", "interfaceLanguage", "autoRun"],
    function(settings) {
      document.getElementById("countryVersion").value = settings.countryVersion;
      document.getElementById("interfaceLanguage").value =
        settings.interfaceLanguage;
      document.getElementById("autoRun").checked = settings.autoRun;
    }
  );
}

// Restores options to chrome.storage.sync
function restoreOptions() {
  chrome.storage.sync.set(
    {
      countryVersion: "com",
      interfaceLanguage: "en",
      autoRun: false
    },
    function() {
      document.getElementById("countryVersion").value = "com";
      document.getElementById("interfaceLanguage").value = "en";
      document.getElementById("autoRun").checked = false;
      var status = document.getElementById("status");
      status.textContent = "Options restored";
      setTimeout(function() {
        status.textContent = "";
      }, 1500);
    }
  );
}

// Event listeners
//window.addEventListener("load", loadOptions);
document.addEventListener("DOMContentLoaded", loadOptions);
document.getElementById("restore").addEventListener("click", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
