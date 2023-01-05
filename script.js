let array = [];
let str = "";
array[1] ='N';
array[2] ='G';
array[3] ='H';
array[4] ='Ị';
array[5] =' ';
array[6] ='L';
array[7] ='Ự';
array[8] ='C';
array[9] =' ';
array[10] ='V';
array[11] ='À';
array[12] =' ';
array[13] ='K';
array[14] ='I';
array[15] ='Ê';
array[16] ='N';
array[17] =' ';
array[18] ='T';
array[19] ='R';
array[20] ='Ì';
array[21] =' ';
array[22] ='S';
array[23] ='Ẽ';
array[24] =' ';
array[25] ='C';
array[26] ='H';
array[27] ='I';
array[28] ='Ế';
array[29] ='N';
array[30] =' ';
array[31] ='T';
array[32] ='H';
array[33] ='Ắ';
array[34] ='N';
array[35] ='G';
array[36] =' ';
array[37] ='T';
array[38] ='Ấ';
array[39] ='T';
array[40] =' ';
array[41] ='C';
array[42] ='Ả';
array[43] ='!';


function fake()
{
    let text = document.getElementById("txt").value;
    for(let i = 1; i <= text.length; i++)
    {
        str = str + array[i];
        if (i === 43)
        {
            str = "";
        }
    }
    document.getElementById("txt").value = str;
    str = "";
    setTimeout("fake()", 1);
}