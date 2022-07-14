import { Link } from "react-router-dom";

function Home() {
    return ( 
        <>
        
        {/* <div class="alert alert-success" role="alert">
  This is a primary alert—check it out!
</div> */}

{/* <div class="container ">
    <div className="row"><span>Home Page</span></div>
     <div class="row">
        <div class="col-md-3"></div>
         <div class="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aut officia ducimus provident facilis nam doloremque porro autem corporis.</p>
         </div>
        <div class="col-md-3"></div>
     </div>
    </div> */}

<div className="home-page">
<div class="container ">
    <div class="row align-items-center vh-100">
        <div class="col-6 mx-auto">
            <div class="card shadow border">
                <div class="card-body d-flex flex-column align-items-center">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <Link to='/product' class="btn btn-primary">Go to product Page</Link>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


        </>
     );
}

export default Home;