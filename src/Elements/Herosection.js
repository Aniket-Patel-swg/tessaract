import React,{useState} from "react";
import '../assets/css/Herosection.css';
import left from '../assets/Images/left.png';
import right from '../assets/Images/right.png';
import text from '../assets/Images/text.png';

const Herosection = () => {

    const [offset, setOffset] = useState();
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener('scroll',handleScroll)

    return ( 
        <>
            <div className="herosection">
            <div className="mouse-move">
                    <div className="left">
                        <h2 className="front-left"> Explore the </h2>
                        <h1 className="front-left"> tesseract </h1>
                    </div>
                    <div className="right">
                        <p className="back-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem earum aliquid fugiat? Fugit, quis?
                        </p>
                    </div>
                </div>
                <div className="zoom">
                    <img className="left-img" src={left} alt="" 
                        style={{width: (100 + offset * 0.3) + '%'}}
                    />
                    <img className="right-img" src={right} alt="" 
                        style={{width: (100 + offset * 0.3) + '%'}}
                    />
                    <img className="text-img" src={text} alt=""
                        style={{top : `-${10 + offset * 0.3 + `%` }`}}
                    />
                </div>

                <div className="content">
                    <h2>Great start of 2023</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum 
                        modi alias dicta ex inventore quis ullam autem, eveniet facilis explicabo 
                        veritatis obcaecati, nobis laboriosam voluptate quisquam dolore incidunt 
                        accusantium voluptatum quidem dolor velit iure perspiciatis praesentium? 
                        Eos esse iure delectus quos saepe porro est consectetur amet cumque non 
                        asperiores dolor modi, enim accusantium? Earum sint omnis cum. Ipsa quibusdam 
                        corporis sint ratione excepturi, repudiandae fugiat exercitationem, quam, 
                        explicabo vel perspiciatis fugit aliquam ipsum? Quae ducimus aliquid voluptas
                         beatae quia ex quidem, accusamus esse dolorum amet vel praesentium quam 
                         perspiciatis quisquam numquam tempore magni consequatur ipsa magnam molestiae
                          maiores! In a deleniti recusandae ut? Quod consequatur facilis ea enim natus
                           pariatur similique placeat reprehenderit eligendi esse aspernatur possimus,
                            eos a magnam deleniti accusamus, tenetur debitis nam amet sapiente. Dolorem
                             delectus, fuga possimus tenetur corrupti quisquam ex explicabo dolor hic
                              aperiam cupiditate a architecto harum. Itaque, debitis porro sint ipsa 
                              totam quia veniam magnam deserunt ducimus atque, dignissimos repellendu
                              s temporibus fugit asperiores corrupti, harum possimus necessitatibus r
                              erum. Hic enim quisquam, perferendis alias ratione quaerat tempora, ve
                              ro beatae praesentium magnam maiores veniam blanditiis deserunt voluptate
                               at consectetur numquam. Architecto magnam eos excepturi nostrum laboriosam
                                adipisci at minus explicabo, modi et ad quis?
                    </p>
                </div>
            </div>
        </>
       
     );
}
 
export default Herosection;