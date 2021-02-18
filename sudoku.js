var arr=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var board=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var beginning;
function solver(){
    document.getElementById("wrong").style.visibility="hidden";
    for (var i=0;i<9;i++){
        for (var j=0;j<9;j++){
            var x=document.getElementById(i.toString()+j.toString()).value.toString();
            if(isNaN(x)){
                if(x=="")
                arr[i][j]=0;
                else
                ;
            }
            arr[i][j]=Number(x);
        }
    }
    beginning=JSON.parse(JSON.stringify(arr));
    var valid=true;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(arr[i][j]!=0){
                valid=dup_validity(i,j,arr[i][j]);
            }
            if(valid==false)
                break;
        }
        if(valid==false)
                break;
    }
    if(valid){
        if(solve()){
            fillBox(arr);
        }
    }
    else{
        document.getElementById("wrong").style.visibility="visible";
    }
}
function sleep(ms){
    var present=Date.now();
    do{

    }while(present-Date.now()>0);
}
function fillBox(arra){
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(arr[i][j]!=beginning[i][j]){
                document.getElementById(i.toString()+j.toString()).style.backgroundColor="#111d5e";
                document.getElementById(i.toString()+j.toString()).style.color="#ffffff";
            }
            else
            document.getElementById(i.toString()+j.toString()).style.backgroundColor="#008891";
            document.getElementById(i.toString()+j.toString()).value=arr[i][j];
        }
    }
}

function dup_isInRow(row,no){
    var c=0;
    for(var i=0;i<9;i++)
        if(arr[row][i]==no)
        c++;
    if(c>1)
    return true;
    return false;
}
// private boolean
function dup_isInCol(col,no){
    var c=0;
    for(var i=0;i<9;i++)
        if(arr[i][col]==no)
        c++;
    if(c>1)
    return true;
    return false;
}
// private boolean 
function dup_isInBox(row,col,no){
    var r=row-row%3;
    var c=col-col%3;
    var cnt=0;
    for(var i=r;i<r+3;i++)
        for(var j=c;j<c+3;j++)
            if(arr[i][j]==no)
            cnt++;
    if(cnt>1)
    return true;
    return false;
}

// private boolean 
function dup_validity(row,col,no){
    return !dup_isInBox(row, col, no) && !dup_isInCol(col, no) && !dup_isInRow(row, no);
}
    function isInRow(row,no){
        var c=0;
        for(var i=0;i<9;i++)
            if(arr[row][i]==no)
            return true;
        return false;
    }
    // private boolean
    function isInCol(col,no){
        var c=0;
        for(var i=0;i<9;i++)
            if(arr[i][col]==no)
            return true;
        return false;
    }
    // private boolean 
    function isInBox(row,col,no){
        var r=row-row%3;
        var c=col-col%3;
        var cnt=0;
        for(var i=r;i<r+3;i++)
            for(var j=c;j<c+3;j++)
                if(arr[i][j]==no)
                return true;
        return false;
    }

    // private boolean 
    function validity(row,col,no){
        return !isInBox(row, col, no) && !isInCol(col, no) && !isInRow(row, no);
    }
    
    function solve(){
        for(var row=0;row<9;row++){
            for(var col=0;col<9;col++){
                if(arr[row][col]==0){
                    for(var no=1;no<=9;no++){
                        if (validity(row,col,no)){
                            arr[row][col]=no;

                            if(solve())return true;
                            else
                                arr[row][col]=0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
function reset(){
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            document.getElementById(i.toString()+j.toString()).value="";
            document.getElementById(i.toString()+j.toString()).style.backgroundColor="white";
        }
    }
}