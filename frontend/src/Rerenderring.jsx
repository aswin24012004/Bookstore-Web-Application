import React,{useState} from "react";



function Application(){
    const [selectValue,setSelectValue] = useState("one");
    const display = (event) =>{
        setSelectValue(event.target.value);
        };
    
    return (
        <div>
            <h1>WhatsApp</h1>
            {selectValue === "one" && <Application1/>}
            {selectValue === "two" && <Application2/>} 
            {selectValue === "callPage" && <Application3/>} 
            <button onClick={display} value={"one"}>One</button> 
            <button onClick={display} value={"two"}>Two</button> 
            <button onClick={display} value={"callPage"}>callPage</button> 
            
        </div>
    );
}

export const  Application1 = () =>{
    
    return (
        <div className="chatPage">
            <img src="img/goku.jpeg" alt="son Goku"/>
            <div className="container">
                <div className="box1">
                    <p>Ben 10</p>
                    <p>All aliens are  the group</p>
                </div>
                <div className="box2">
                    <p>Yesterday</p>
                    <div className="msgBox">
                        <p>3</p>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export const Application2 = ()=>{
    
    return (
        <div className="statusBar">
            <h1>Status</h1>  
            <div className="statusPage">
                <div className="myStatus">
                    <img src="img/micky.jpeg" className="" alt="my Status"/>
                    <div className="sbox1">
                        <h3>My Status</h3>
                        <p>10:20 am</p>
                    </div>
                </div>  
            </div>
            <div className="scenterBar">
                <p>Recent updates</p>
            </div>
            <div className="statusPage">  
                <div className="myStatus">
                    <img src="img/micky.jpeg" className="" alt="my Status"/>
                    <div className="sbox1">
                        <h3>Micky mouse</h3>
                        <p>10:20 am</p>
                    </div>
                </div>  
            </div>

        </div>
    );
}



export const Application3 = () =>{
    
    return (
        <div className="callPage">
            <div className="cHeader"></div>
            <div className="Ccontainer">
                <div className="cContent">
                    <img src="img/R.jpeg" alt="Image"/>
                    <div className="Cwords">
                        <h4>Name</h4>
                        <p><span></span>24 November,9:02 pm</p>
                    </div>
                    <img className="Images" src="img/telephone.png" alt="callType"/>
                </div>
            </div>  
        </div>
    );
};
export default Application;