[hellosign99]

<script type="text/javascript" src="//s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.min.js"></script>

  <script>
                HelloSign.init("<?php echo $client_id ?>");
                HelloSign.open({
                    url: "<?php echo $sign_url ?>",
                    uxVersion: 2,
                    allowCancel: true,
//                     skipDomainVerification: true,
                    debug: true,
                    messageListener: function (eventData) {
                        ("Got message data: " + JSON.stringify(eventData));
                        if (eventData.event == HelloSign.EVENT_SIGNED) {
                            HelloSign.close();
                            console.log(eventData.signature_id + "is the signature_id itself");
                            window.location = "index.php";
                        } else if (eventData.event == HelloSign.EVENT_CANCELED) {
                            alert("Event Canceled And Stuff!");
                            console.log(eventData);
                            window.location = "index.php";
                        } else if (eventData.event == HelloSign.EVENT_ERROR) {
                            alert("There Was An Error And Stuff!");
                            console.log(eventData);
                            window.location = "index.php";
                        } else if (eventData.event == HelloSign.EVENT_SENT) {
                            alert("Signature Request Sent And Stuff!");
                            console.log(eventData);
                            window.location = "index.php";
                        } else if (eventData.event == HelloSign.EVENT_TEMPLATE_CREATED) {
                            window.alert("Template id <?php echo $template_id ?> created!");
                            console.log(eventData);
                            window.location = "index.php";
                        } else if (eventData.event == HelloSign.EVENT_DECLINED) {
                            alert("Signature Request declined And Stuff!");
                            console.log(eventData);
                            window.location = "index.php";
                        }
                    }
                });
            </script>