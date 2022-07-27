import React from "react";

export const Dinamica = () => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. IDENTIFICAR (ID) 79%
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-grid">
                <a
                  className="btn btn-primary d-flex d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span> - 1. Gestión de activos (ID.AM)</span>
                  <span>97%</span>
                </a>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <div className="d-flex justify-content-between">
                    <h6>ID.AM-1</h6>
                    <small>100%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.AM-2</h6>
                    <small>100%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.AM-3</h6>
                    <small>100%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.AM-4</h6>
                    <small>100%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.AM-5</h6>
                    <small>100%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.AM-6</h6>
                    <small>80%</small>
                  </div>
                </div>
              </div>

              <div className="d-grid">
                <a
                  className="btn btn-primary d-flex d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExampleTwo"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExampleTwo"
                >
                  <span> - 2. Entorno empresarial (ID.BE)</span>
                  <span>84%</span>
                </a>
              </div>
              <div className="collapse" id="collapseExampleTwo">
                <div className="card card-body">
                  <div className="d-flex justify-content-between">
                    <h6>ID.BE-1</h6>
                    <small>50%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.BE-2</h6>
                    <small>80%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.BE-3</h6>
                    <small>90%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.BE-4</h6>
                    <small>100%</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>ID.BE-5</h6>
                    <small>100%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. PROTEGER (PR) 48%
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. DETECTAR (DE) 81%
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. RESPONDER (RS) 44%
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5. RECUPERAR (RC) 72%
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
