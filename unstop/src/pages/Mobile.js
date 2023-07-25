import { useState, useCallback } from "react";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./Mobile.module.css";
const Mobile = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onLaptopMacIcon1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.frameParent}>
          <div className={styles.statusBarParent}>
            <div className={styles.statusBar}>
              <img className={styles.icon} alt="" src="/941.svg" />
              <div className={styles.frame}>
                <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-10000078511.svg"
                />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.segmentWrapper}>
                  <img
                    className={styles.segmentIcon}
                    alt=""
                    src="/segment.svg"
                  />
                </div>
                <div className={styles.assessment}>Assessment</div>
              </div>
              <div className={styles.laptopMacWrapper}>
                <img
                  className={styles.laptopMacIcon}
                  alt=""
                  src="/laptop-mac.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.myAssessmentsWrapper}>
                  <div className={styles.myAssessments}>My Assessments</div>
                </div>
                <div className={styles.unstopAssessmentsWrapper}>
                  <div className={styles.myAssessments}>Unstop Assessments</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component61Wrapper}>
            <div className={styles.statusBarParent}>
              <div className={styles.frameParent1}>
                <div className={styles.myAssessmentParent}>
                  <div className={styles.myAssessment}>My Assessment</div>
                  <div className={styles.frameParent2}>
                    <div className={styles.searchWrapper}>
                      <img
                        className={styles.searchIcon}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                    <div className={styles.searchWrapper}>
                      <img
                        className={styles.filterListAltIcon}
                        alt=""
                        src="/filter-list-alt.svg"
                      />
                    </div>
                    <div className={styles.searchWrapper}>
                      <img
                        className={styles.barChartChild}
                        alt=""
                        src="/frame-1000009695@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/frame-1000002779@2x.png"
                      />
                      <div className={styles.myAssessment}>New Assessment</div>
                    </div>
                    <div className={styles.fromHereYou}>
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </div>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent11}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link5.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameWrapper2}>
                          <div className={styles.lpWrapper}>
                            <b className={styles.lp}>LP</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link9.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link10.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link9.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link9.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link9.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link4.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+32,4090</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addWrapper}>
          <img className={styles.addIcon} alt="" src="/add3.svg" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.statusBar}>
            <img className={styles.icon} alt="" src="/941.svg" />
            <div className={styles.frame}>
              <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-10000078511.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild21}
                alt=""
                src="/frame-1000008948@2x.png"
                onClick={openDrawer}
              />
              <div className={styles.assessment}>Assessment</div>
            </div>
            <div className={styles.laptopMacWrapper}>
              <img
                className={styles.laptopMacIcon1}
                alt=""
                src="/laptop-mac.svg"
                onClick={onLaptopMacIcon1Click}
              />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.myAssessmentsWrapper}>
                <div className={styles.myAssessments}>My Assessments</div>
              </div>
              <div className={styles.unstopAssessmentsWrapper}>
                <div className={styles.myAssessments}>Unstop Assessments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Mobile;
