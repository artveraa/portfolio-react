import {useState, useEffect, useRef} from "react";
import createClient from "../../client";

const HomeBanner = () => {
    const [homeBanner, setHomeBanner] = useState(null);

    const banner = useRef(null);
    const maskRef = useRef(null);
    const leftTextRef = useRef(null);
    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const rightTextRef = useRef(null);
    const jobPart1Ref = useRef(null);
    const jobPart2Ref = useRef(null);
    const introRef = useRef(null);

    useEffect(() => {
        createClient.fetch(`*[_type == "bannerHome"]{
            surname,
            name,
            job1,
            job2,
            presentation,
            background,
        }`).then((data) => setHomeBanner(data));

        console.log(homeBanner)
    }, []);



    return (
        <>
            {homeBanner && homeBanner.map((homeBanner, index) => (
                <div className={'banner'} ref={banner} key={index}>
                    <div className={'mask'} ref={maskRef}>
                        <div className={'img-container'}>
                            <img src={homeBanner.background} alt="background"/>
                            {/*<video autoPlay muted loop id="myVideo">*/}
                            {/*    <source src="/videos/bg.mp4" type="video/mp4"/>*/}
                            {/*</video>*/}
                        </div>

                        <div className={'left-text-container'} ref={leftTextRef}>
                            <div className={'surname'} ref={surnameRef}>
                                {homeBanner.surname}
                            </div>
                            <div className={'name'} ref={nameRef}>
                                {homeBanner.name}
                            </div>
                        </div>

                        <div className={'right-text-container'} ref={rightTextRef}>
                            <div className={'job-part-1'} ref={jobPart1Ref}>
                                {homeBanner.job1}
                            </div>

                            <div className={'job-part-2'} ref={jobPart2Ref}>
                                {homeBanner.job2}
                            </div>
                        </div>
                    </div>
                    <div className={'intro'} ref={introRef}>
                        <div className={'intro-text'}>
                            {homeBanner.presentation.map((presentation, index) => (
                                <>
                                <p key={index}>{presentation.text}</p>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default HomeBanner;