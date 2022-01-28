const next_form = (cdiv,prn) =>{
    if(cdiv!=4 || prn!=66){
    document.getElementById(`f_${cdiv}`).style.display = 'none';
    document.getElementById(`f_${cdiv+1}`).style.display = 'block';
    document.getElementById('pr').style.width = `${prn+33}%`;
    let element1 = document.querySelector(`#l${cdiv}`);
    element1.classList.remove('active');
    let element2 = document.querySelector(`#l${cdiv+1}`);
    element2.classList.add('active');}
    else{
        window.location.replace('dashboard.html');
    }

}
const pre_form = (cdiv ,prn) =>{
    document.getElementById(`f_${cdiv}`).style.display = 'none';
    document.getElementById(`f_${cdiv-1}`).style.display = 'block';
    document.getElementById('pr').style.width = `${prn-33}%`;
    let element1 = document.querySelector(`#l${cdiv}`);
    element1.classList.remove('active');
    let element2 = document.querySelector(`#l${cdiv-1}`);
    element2.classList.add('active');
}
