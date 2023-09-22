function Input({...inputProps}) {
    return (
            <input{...inputProps} />
    )
}

// import Input from "./input.js";
// import { Welcome } from "./input.js";

function Button ({className, children, ...buttonProps}) {
    return (
            <button 
                className={className}
                {...buttonProps}>
                    {children}
            </button>
                
    )
}

function  HomePage () {
    return (
        <div className="home">
            <h1 className="title">Quiz</h1>
            <div className="form">
                <form>
                <div className="inputContainer">
                    <Input type="text" placeholder="Enter Username" name="uname" required />
                </div>
                <div className="inputContainer">
                     <Input  type="password" placeholder="Enter Password" name="pass" required  />
                </div>
                    <div className="subContainer">
                     <label>
                          <Input type="checkbox" name="remember" />
                          Remember me
                      </label>
                      <p className="forgotpsd"> <a href="#">Forgot Password?</a></p>
                  </div>
                  <div className="buttonContainer">
                  <Input type="submit" value = "Login"/>
                 </div>
                    <p className="register">Not a member?  <a href="#">Register here!</a></p>
                </form>
            </div>
            <div>
                <h3 className="title">Catégories</h3>
                <Button className="typeExercice"  type="button">Partie du discours</Button>
                <Button className="typeExercice" type="button">Fonctionne grammaticale</Button>
                {/* <Welcome name="moulemoule"></Welcome> */}
            </div>
        </div>    

    )
}
const container = document.querySelector("#root");
const root =  ReactDOM.createRoot(container);
root.render(<HomePage />)
