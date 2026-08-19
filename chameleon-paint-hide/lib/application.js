const application = (function () {

    let canvas = document.querySelector("#unity-canvas");
    let loadingBar = document.querySelector("#unity-loading-bar");
    let progressBarFull = document.querySelector("#unity-progress-bar-full");

    function bannerException(message, type) {
        if (type == "error") {
            console.error(message);
            return;
        }
        console.warn(message);
    }

    function xhrDownload(url, onProgress) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onprogress = function(e) {
                if (e.lengthComputable && onProgress) {
                    onProgress(e.loaded / e.total);
                }
            };
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new Blob([xhr.response]));
                } else {
                    reject(new Error("XHR failed " + xhr.status));
                }
            };
            xhr.onerror = function() { reject(new Error("Network error")); };
            xhr.send();
        });
    }

    let config = {
        arguments: [],
        dataUrl: runtimeData.dataURL,
        frameworkUrl: runtimeData.frameworkURL,
        workerUrl: runtimeData.workerURL,
        codeUrl: runtimeData.codeURL,
        symbolsUrl: runtimeData.symbolsURL,
        streamingAssetsUrl: runtimeData.streamingURL,
        companyName: runtimeData.companyName,
        productName: runtimeData.productName,
        productVersion: runtimeData.productVersion,
        showBanner: bannerException,
    };

    let instance = null;

    return {

        initialize: function () {
            var dataUrl = runtimeData.dataURL;
            var codeUrl = runtimeData.codeURL;
            var needsPrefetch = (dataUrl.indexOf(".github.io") !== -1) || (codeUrl.indexOf(".github.io") !== -1);

            function startUnity() {
                let script = document.createElement("script");
                script.src = runtimeData.loaderURL;
                script.onload = () => {
                    createUnityInstance(canvas, config, (progress) => {
                        progressBarFull.style.width = 100 * progress + "%";
                    }).then((unityInstance) => {
                        instance = unityInstance;
                        loadingBar.style.display = "none";
                        if (runtimeData.debugMode == true) {
                            diagnosticsIcon.style.display = "block";
                            diagnosticsIcon.style.position = "fixed";
                            diagnosticsIcon.style.bottom = "10px";
                            diagnosticsIcon.style.right = "0px";
                            canvas.after(diagnosticsIcon);
                            diagnosticsIcon.onclick = () => {
                                unityDiagnostics.openDiagnosticsDiv(unityInstance.GetMetricsInfo);
                            };
                        }
                    }).catch((message) => {
                        console.error(message);
                        alert(message);
                    });
                };
                document.body.appendChild(script);
            }

            if (needsPrefetch) {
                console.log("[app] Pre-fetching large files via XHR to bypass frame_ant.js...");
                var totalTasks = 0;
                var doneTasks = 0;
                if (dataUrl.indexOf(".github.io") !== -1) totalTasks++;
                if (codeUrl.indexOf(".github.io") !== -1) totalTasks++;

                function onTaskDone() {
                    doneTasks++;
                    progressBarFull.style.width = Math.round((doneTasks / totalTasks) * 50) + "%";
                    if (doneTasks >= totalTasks) {
                        startUnity();
                    }
                }

                if (dataUrl.indexOf(".github.io") !== -1) {
                    xhrDownload(dataUrl, function(p) {
                        progressBarFull.style.width = Math.round(p * 40) + "%";
                    }).then(function(blob) {
                        config.dataUrl = URL.createObjectURL(blob);
                        console.log("[app] .data blob ready: " + blob.size + " bytes");
                        onTaskDone();
                    }).catch(function(e) {
                        console.warn("[app] .data XHR failed, using direct URL: " + e.message);
                        onTaskDone();
                    });
                }

                if (codeUrl.indexOf(".github.io") !== -1) {
                    xhrDownload(codeUrl, function(p) {
                        progressBarFull.style.width = Math.round(50 + p * 40) + "%";
                    }).then(function(blob) {
                        config.codeUrl = URL.createObjectURL(blob);
                        console.log("[app] .wasm blob ready: " + blob.size + " bytes");
                        onTaskDone();
                    }).catch(function(e) {
                        console.warn("[app] .wasm XHR failed, using direct URL: " + e.message);
                        onTaskDone();
                    });
                }
            } else {
                startUnity();
            }
        },

        publishEvent(methodName, stringValue) {
            if (instance == null || instance == undefined) return;
            instance.SendMessage("JSCallbacks", methodName, stringValue);
        },

        isMobile() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },

    }

})();
