import React from "react";
import "../../assets/css/layout.css";
import "../../assets/css/vars.css";
import "./Login.css";

const Login = () => {
  return (
    <main className="flex items-center justify-center full-vh">
      <section className="half-width wrapper  login  full-vh flex column items-center">
        <div className="login-header bold pb-md">Welcome To</div>
        <div className="pb-md">Company Logo</div>
        <div className="login-detail pb-md">
          andard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentiall
        </div>
        <div>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </div>
        <div>
          Dont have an account? <span>Create an Account Here</span>
        </div>
      </section>
      <section className="half-width designer ">
        <div>company logo</div>
        <div>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet,
        </div>
      </section>
    </main>
  );
};

export default Login;
