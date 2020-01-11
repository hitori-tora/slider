const e = React.createElement;
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 0 };
    };
    changeSlide(index) {
        this.setState({ selected: index });
    }
    slideRight() {
        let tempIndex = this.state.selected + 1;
        if (tempIndex === this.props.children.length) {
            tempIndex = 0;
        }
        this.setState({selected: tempIndex});
    }
    slideLeft() {
        let tempIndex = this.state.selected - 1;
        if (tempIndex < 0) {
            tempIndex = this.props.children.length - 1;
        }
        this.setState({selected: tempIndex});
    }
    render() {
        let children = this.props.children.map((child, index) => {
            let newChild = React.cloneElement(child);
            if (index !== this.state.selected) {
                newChild.props.className += " hidden";
            }
            return newChild;
        });
        let dots = this.props.children.map((child, index) => {
            let className = "dot";
            if (index === this.state.selected) {
                className += " active";
            }
            return (<span className={className} onClick={this.changeSlide.bind(this, index)}></span>)
        });
        let cities = this.props.titles;
        let menu = cities.map((city, index) => {
            let className = "projects__menu--link";
            if (index === this.state.selected) {
                className += " selected";
            }
            return (<a className={className} href="#" onClick={this.changeSlide.bind(this, index)}>{city}</a>)
        });
        return (
            <div className={this.props.className}>
                <div className="projects__menu">
                    {menu}
                </div>
                {children}
                <div className="slider__navigation">
                    <span className="arrow-left" onClick={this.slideLeft.bind(this)}>&#8592;</span>
                    {dots}
                    <span className="arrow-right" onClick={this.slideRight.bind(this)}>&#8594;</span>
                </div>
            </div>
        )
    }
}
class ReactWrapper extends React.Component {
    render() {
        return (
            <Slider className="slider" titles={["Rostov-on-Don, Admiral", "Sochi, Thieves", "Rostov-on-Don, Patriotic"]}>
                <div className="projects">
                    <div className="projects__left">
                        <div className="projects__left--info">
                            <h2 className="text--orange projects__left--title">Completed <br /> projects <span>&emsp; -------</span>
                            </h2>
                            <p className="projects__left--text">Only a small part of the work performed by our company is
                                represented on this site. For
                                14 years
                    on the construction market we have been making happy more th an 1000 families.</p>
                        </div>
                        <div className="projects__left-wrap">
                            <div className="projects__left--sample">
                                <h4 className="text--orange">City:</h4>
                                <p className="projects__left--description">Rostov-on-Don<br />
                                    LCD Admiral</p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Apartment area:</h4>
                                <p className="projects__left--description">81 m<sup>2</sup></p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Repair time:</h4>
                                <p className="projects__left--description">3.5 months</p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Repair cost:</h4>
                                <p className="projects__left--description">Upon request</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__right">
                        <div className="projects__right--img">
                            <img className="small-screen-invisible" src="images/image 2.1.jpg" width="679" height="482"
                                alt="room with chairs" />
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="projects__left">
                        <div className="projects__left--info">
                            <h2 className="text--orange projects__left--title">Completed <br /> projects <span>&emsp; -------</span>
                            </h2>
                            <p className="projects__left--text">Only a small part of the work performed by our company is
                                represented on this site. For
                                14 years
                    on the construction market we have been making happy more th an 1000 families.</p>
                        </div>
                        <div className="projects__left-wrap">
                            <div className="projects__left--sample">
                                <h4 className="text--orange">City:</h4>
                                <p className="projects__left--description">Sochi<br />
                                    Thieves</p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Apartment area:</h4>
                                <p className="projects__left--description">105 m<sup>2</sup></p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Repair time:</h4>
                                <p className="projects__left--description">4 months</p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Repair cost:</h4>
                                <p className="projects__left--description">Upon request</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__right">
                        <div className="projects__right--img">
                            <img className="small-screen-invisible" src="images/image 2 (4).jpg" width="679" height="482"
                                alt="room with chairs" />
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="projects__left">
                        <div className="projects__left--info">
                            <h2 className="text--orange projects__left--title">Completed <br /> projects <span>&emsp; -------</span>
                            </h2>
                            <p className="projects__left--text">Only a small part of the work performed by our company is
                                represented on this site. For
                                14 years
                    on the construction market we have been making happy more th an 1000 families.</p>
                        </div>
                        <div className="projects__left-wrap">
                            <div className="projects__left--sample">
                                <h4 className="text--orange">City:</h4>
                                <p className="projects__left--description">Rostov-on-Don<br />
                                    Patriotic</p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Apartment area:</h4>
                                <p className="projects__left--description">93 m<sup>2</sup></p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Repair time:</h4>
                                <p className="projects__left--description">3 months</p>
                            </div>
                            <div className="projects__left--sample">
                                <h4 className="text--orange">Repair cost:</h4>
                                <p className="projects__left--description">Upon request</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__right">
                        <div className="projects__right--img">
                            <img className="small-screen-invisible" src="images/image 3 (3).jpg" width="679" height="482"
                                alt="room with chairs" />
                        </div>
                    </div>
                </div>
            </Slider>)
    }
}
const domContainer = document.querySelector('#slider-place');
ReactDOM.render(e(ReactWrapper), domContainer);