import { Link, useNavigate, useParams } from 'react-router-dom'
function About() {
    const navigate = useNavigate()
    const { id, username } = useParams()
    return (
        <>
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/200/300" class="card-img-top" height="200px" width="200px" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h5 class="card-title">Price : <span class="price-font" style={{ color: "red" }}>$100.00</span></h5>
                    <Link to="/cart" class="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
        </>
    );
}

export default About;