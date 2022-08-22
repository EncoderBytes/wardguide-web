import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/Mobile-10.jpg";

export default function Projects() {
  return (
    <Wrapper id="about">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A Few Words About Ward Guide</h4>
              <h2 className="font40 extraBold">About Ward Guide</h2>
              <p className="font12">
                An instant access to evidence-based pocket guide for healthcare professionals.
                From Ward Guide the one healthcare app, you can learn and practice to check signs and symptoms, History taking, General physical examinations, Managements of Diseases (including goals of the treatment), pharmacological and non-pharmacological therapies, Ward protocols, Common medical and surgical emergencies, General procedures, Rational use of drugs and much more.
                All content in this app is verified by Qualified & Registered Doctors and Pharmacists, therefore; it is highly recommended for House officers (Hos), Medical officers (MOs), General practitioners (GPs), Post graduate residents, Clinicians, Pharmacists and Nurses.
                <br />
                <h4>The content in the App is based:</h4>
                Current Medical Diagnosis & Treatment 2021 edition.
                Current practice Guidelines in Primary care 2020.
                Pharmacotherapy Handbook by Joseph T.Dipiro.
                Oxford Handbook of Clinical Medicine.
                Oxford Handbook of Pediatrics Kumar & Clark's clinical Medicine 10th edition.
                Nicholas J Talley & Simon O'Connor's Clinical examination 8th edition.
                Manual of Cardiovascular Medicine by Brian P.Graffin 4 Edition.
                Harrison's Principles of Internal Medicine 19th Edition.
                Davidson principles and practice of Medicine 23rd edition.
                Macleod's clinical examination 13th edition
                Medscape.
                WHO guidelines.
                For further information, suggestions and queries, reach out to our experts
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper >
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
// const HeaderInfo = styled.div`
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
