import { useEffect, useState } from "react";
import { useAuth } from "../../providers/authProvider";
import axios from "axios";

export default function Movement({movementType}){
    const [movType, setMovType] = useState(movementType);
    const [ amount, setAmount ] = useState(0);
    const { userValue } = useAuth();
    const [user, setUser] = userValue;
    const [ parsedUser, setParsedUser ] = useState(null);

    const handleSubmit = async () =>{
      const newMovement = {
        userId: parsedUser._id,
        movementType: movementType,
        amount: amount,
        loggedUserId: parsedUser._id
      }
      

      try{
        const response = await axios.post("http://localhost:5000/api/user/movement",JSON.stringify(newMovement));
        const result = response.data;

        if(!result.user)
        {
          alert(result.message);
          return;
        }
        console.log(JSON.stringify(result.user));
        setUser(JSON.stringify(result.user));

      }catch(error){
        alert(error.response.data.message)
      }finally{
        setAmount(0);
      }
    }
    
    useEffect(()=>{
      if(user){
        setParsedUser(JSON.parse(user));
      }
      
    },[user]);
    
    return(
      <>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h1>{movType==="d"?"Deposit":"Withdraw"}</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title"><i className="ion ion-person-add"></i> {parsedUser?.email}</h3>
                    </div>
                    <div className="card-body">
                      <dl className="row">
                      <dt className="col-sm-4">Name:</dt>
                      <dd className="col-sm-8">{parsedUser?.name}</dd>
                      <dt className="col-sm-4">Balance:</dt>
                      <dd className="col-sm-8">{Number(parsedUser?.account.balance).toFixed(2)}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row" id="form">
                <div className="col-12">
                  <div className={movType==="d"?"card card-success":"card card-danger"}>
                    <div className="card-header">
                      <h3 className="card-title">Make a {movType==="d"?"Deposit":"Withdraw"}</h3>
                    </div>
                    <div className="card-body">
                      <div className="form-group col-3">
                        <label>Deposit amount</label>
                        <input name="amount" type="number" className="form-control" placeholder="0.00" value={amount} onChange={e=>setAmount(e.target.value)} autoComplete="false" onClick={e=>e.target.value = ''}></input>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button className={movType==="d"?"btn btn-success":"btn btn-danger"} onClick={handleSubmit}>Make a {movType==="d"?"Deposit":"Withdraw"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </>
    );
  }