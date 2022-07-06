import React from "react";
import ReactLogo from "../assets/reactlogo.png";
import SanityLogo from "../assets/sanity.png";
import MaterialUILogo from "../assets/materialui.png";
import useCase from "../assets/usecase.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from 'next/image'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

const Project = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-overview">
          <p>
            At a time when web space is taking over the development of Web 3.0,
            this brings huge potential for improvement and creativity when it
            comes to using technology. This brings with it the development of
            NFT (non-fungible token) and the need for different platforms to buy
            and sell them. This platform will provide sellers and buyers with a
            unified place to buy and sell NFT as well as a place where they will
            be able to share various information on current trends in the
            segment.
            <br />
            This project represents an ultimate NFT marketplace as well as forum
            for people to discuss newest and upcomming trends. To visit the full
            overview of the app click on the button bellow and read further.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <button style={{ margin: 20 }}>
              <a
                target="_blank"
                href="https://www.notion.so/DZ-1-920b2b687db04612b1d56bb122d0c0ee"
              >
                {" "}
                Full description{" "}
              </a>
            </button>
            <button style={{ margin: 20 }} onClick={handleOpen}>
              Use Case
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Image src={useCase} style={{ width: 1100 }} />{" "}
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="project-technologies">
          <div className="project-technology-single">
            <Image src={SanityLogo} />
            <h3 className="blue">Sanity</h3>
          </div>

          <div className="project-technology-single custom">
            <Image src={MaterialUILogo} />
            <h3 className="blue">Material UI</h3>
          </div>

          <div className="project-technology-single">
            <Image src={ReactLogo} />
            <h3 className="blue">Next JS</h3>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Project;