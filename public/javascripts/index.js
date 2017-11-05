let exist = '';
console.log('exits gere' + exist)
function emailsubs() {

    if (exist === "") {
        let emailid = $("#emailid").val();
        let name = emailid.split('@');
        let obj = {
            email: emailid,
            name: name[0]
        };
        console.log(exist);

        $.ajax({
            url: "/emailsub",
            method: "post",
            data: obj,
            success: function (data) {
                console.log(data);
                exist = $("#emailid").val();
                if (data.response === 1) {
                    alert('Thanks ' + name[0] + ' for subscribing');
                } else {
                    alert('error while subscribing');
                }
            }
        });
    } else {
        alert('already subscribed');
    }

}