export const requestUrlHelper = {
    goToRecord,
}

function goToRecord({RecordID}) {
    let args = "RecordID={0}".replace("{0}", RecordID);
    const win = window.open("/app/create_cv" + args, "_blank");
    win.focus();
}