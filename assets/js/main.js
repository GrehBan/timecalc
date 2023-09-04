const timeRepr = document.getElementById("time-repr")
let allM = 0


$("#calc-input").on('keypress',function(ev){
    if(ev.which === 13){
        $(this).attr("disabled", "disabled");

        let h, m;
        let val = $(ev.target).val();
        let valArr = val.split(':');
        if (valArr.length == 1){
            if (val.length == 4){
                h = val.slice(0, 2);
                m = val.slice(2);
            } else if (val.length == 3){
                h = val.slice(0, 1);
                m = val.slice(1);
            } else {
                console.log("Ok")
                $(this).removeAttr("disabled");
                return false;
            }
        } else {
            [h, m] = valArr;
        }
        nh = Number(h)
        nm = Number(m)
        const hv = nh >= 0 && nh <= 23;
        const mv = nm >= 0 && nm <= 59 && m.length === 2;
        if ((hv && mv) === false) {
            $(this).removeAttr("disabled");
            return false;
        };
        allM = allM + ((nh * 60) + nm)
        let allH = (allM - allM % 60) / 60
        let modM = allM % 60
        if (modM == 0) modM = "00";
        timeRepr.innerText = allH + ":" + modM
        $(this).removeAttr("disabled");
        if ("virtualKeyboard" in navigator) {
            navigator.virtualKeyboard.show();
        };
    }
  });
