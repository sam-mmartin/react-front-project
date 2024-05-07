import React from 'react';
import CardBackground from '../../card/card-language';
import ListUnstyled from '../../ul-list/list-unstyled';
import Languages from '../../../models/languages';

const TabContent = ({languages}: {languages: Languages[]}) => {
    return (
        <div className="tab-content tab-space">
            <div className="tab-pane active work" id="work">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        <div className="row collections">
                            {languages.map((item) => {
                                return (
                                    <div key={item.name} className="col-md-4">
                                        <CardBackground {...item} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col-md-2 mr-auto ml-auto stats">
                        <h4 className="title">Stats</h4>
                        <ListUnstyled />
                        <hr />

                        <h4 className="title">About his Work</h4>
                        <p className="description">
                            French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered soles
                            that have become his signature.
                        </p>
                        <hr />
                        <h4 className="title">Focus</h4>
                        <span className="badge badge-primary">Footwear</span>
                        <span className="badge badge-rose">Luxury</span>
                    </div>
                </div>
            </div>

            <div className="tab-pane connections" id="portfolio">
                <div className="row">
                    <div className="col-md-5 ml-auto mr-auto">
                        <div className="card card-profile card-plain">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card-header card-header-image">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/faces/avatar.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h4 className="card-title">Gigi Hadid</h4>
                                        <h6 className="card-category text-muted">Model</h6>
                                        <p className="card-description">
                                            Don&apos;t be scared of the truth because we need to restart the human
                                            foundation in truth...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mr-auto ml-auto">
                        <div className="card card-profile card-plain">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card-header card-header-image">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/faces/marc.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h4 className="card-title">Marc Jacobs</h4>
                                        <h6 className="card-category text-muted">Designer</h6>
                                        <p className="card-description">
                                            Don&apos;t be scared of the truth because we need to restart the human
                                            foundation in truth...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 ml-auto mr-auto">
                        <div className="card card-profile card-plain">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card-header card-header-image">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/faces/kendall.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h4 className="card-title">Kendall Jenner</h4>
                                        <h6 className="card-category text-muted">Model</h6>
                                        <p className="card-description">
                                            I love you like Kanye loves Kanye. Don&apos;t be scared of the truth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ml-auto mr-auto">
                        <div className="card card-profile card-plain">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card-header card-header-image">
                                        <a href="#pablo">
                                            <img className="img" src="../assets/img/faces/card-profile2-square.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h4 className="card-title">George West</h4>
                                        <h6 className="card-category text-muted">Model/DJ</h6>
                                        <p className="card-description">I love you like Kanye loves Kanye.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-pane text-center gallery" id="curriculum">
                <div className="row">
                    <div className="col-md-3 ml-auto">
                        <img src="../assets/img/examples/mariya-georgieva.jpg" className="rounded" />
                        <img src="../assets/img/examples/clem-onojegaw.jpg" className="rounded" />
                    </div>
                    <div className="col-md-3 mr-auto">
                        <img src="../assets/img/examples/clem-onojeghuo.jpg" className="rounded" />
                        <img src="../assets/img/examples/olu-eletu.jpg" className="rounded" />
                        <img src="../assets/img/examples/cynthia-del-rio.jpg" className="rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabContent;
