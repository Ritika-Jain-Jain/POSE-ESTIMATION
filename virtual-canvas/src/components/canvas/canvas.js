import React, {useState, useEffect} from "react";
import "./canvas.css";

// export default class FetchRandomUser extends React.Component {
//     state = {
//         loading: true,
//         image: true
//     };
    
//     async componentDidMount() {
//         const url = "http://127.0.0.1:5000/video";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ image: data.results[0], loading: false });
//     }
    
//     render() {
//         if (this.state.loading) {
//         return <div>loading...</div>;
//     }

//     if (!this.state.image) {
//         return <div>didn't get an image</div>;
//     }

//     return (
//         <div>
//             <img src={this.state.image} />
//         </div>
//     );
//     }
// }

const Canvas = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5000/video").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    })

    return(
        <div>
            
            <img src={data} alt="canvas" width="50%"/>

        </div>
    )
}

export default Canvas