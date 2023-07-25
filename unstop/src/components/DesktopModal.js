import styles from "./DesktopModal.module.css";
const DesktopModal = ({ onClose }) => {
  return (
    <div className={styles.desktopmodal}>
      <div className={styles.createNewAssessmentParent}>
        <div className={styles.createNewAssessment}>Create new assessment</div>
        <img
          className={styles.cutIcon}
          alt=""
          src="/cut1.svg"
          onClick={onClose}
        />
      </div>
      <section className={styles.frameParent} id="modal">
        <div className={styles.frameGroup}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Name of assessment</div>
          </div>
          <div className={styles.typeHereWrapper}>
            <div className={styles.nameOfAssessment}>Type Here</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>
              Purpose of the test is
            </div>
          </div>
          <div className={styles.selectParent}>
            <div className={styles.nameOfAssessment}>Select</div>
            <img
              className={styles.keyboardArrowDownIcon}
              alt=""
              src="/keyboard-arrow-down.svg"
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Description</div>
          </div>
          <div className={styles.selectParent}>
            <div className={styles.nameOfAssessment}>Select</div>
            <img
              className={styles.keyboardArrowDownIcon}
              alt=""
              src="/keyboard-arrow-down.svg"
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Skills</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      UI/UX and Design
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      No of Question
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      Web Development
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      UI/UX and Design
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      Web Development
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typeHereContainer}>
              <div className={styles.nameOfAssessment}>Type here</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>
              Duration of assessment
            </div>
          </div>
          <div className={styles.hhmmssParent}>
            <div className={styles.nameOfAssessment}>HH:MM:SS</div>
            <img
              className={styles.keyboardArrowDownIcon2}
              alt=""
              src="/check.svg"
            />
          </div>
        </div>
      </section>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <div className={styles.createNewAssessment}>Save</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopModal;
