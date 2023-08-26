import { PrimaryButton, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const fileUrl = import.meta.env.DEV
  ? "/pdf-open-parameters.pdf"
  : "https://anhnt1023.github.io/pdf-viewer-sample/pdf-open-parameters.pdf";

export const ReactPDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      defaultTabs[0], // Thumbnails tab
    ],
    toolbarPlugin: {
      fullScreenPlugin: {
        renderExitFullScreenButton: (props) => (
          <div
            style={{
              bottom: "1rem",
              position: "fixed",
              right: "1rem",
              zIndex: 1,
            }}
          >
            <PrimaryButton onClick={props.onClick}>
              Exit full screen
            </PrimaryButton>
          </div>
        ),
      },
    },
  });

  const handleDocumentLoad = () => {
    const { activateTab } = defaultLayoutPluginInstance;

    // Activate the bookmark tab
    activateTab(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        // width: "75%",
        margin: "30px auto",
      }}
    >
      <Viewer
        fileUrl={fileUrl}
        plugins={[defaultLayoutPluginInstance]}
        onDocumentLoad={handleDocumentLoad}
        defaultScale={1}
      />
    </div>
  );
};
