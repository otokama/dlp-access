import React, { Component } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import ReactHtmlParser from "react-html-parser";

import "../css/Citation.scss";

class Citation extends Component {
  redirect_url() {
    let redirect = "";
    try {
      const options = JSON.parse(this.props.site.siteOptions);
      if (options.redirectURL) {
        redirect = options.redirectURL;
      }
    } catch (error) {
      console.log("Redirect url not defined in site config.");
    }
    return redirect;
  }

  render() {
    const theme = createTheme({
      overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: "0.875rem",
            fontFamily: "Acherus, sans-serif",
            backgroundColor: "black"
          },
          arrow: {
            color: "black"
          }
        }
      }
    });
    const redirect = this.redirect_url();

    return (
      <div aria-label="Item Citation" className="citation-section">
        <h3 className="citation-heading">Cite this Item</h3>
        <div className="citation-text"></div>
        <div className="permanent-link">
          <div className="link-label">
            Permanent Link:
            <MuiThemeProvider theme={theme}>
              <Tooltip
                title="Use this link for citations in publications and presentations to ensure consistent access in the future."
                arrow
                placement="top"
                tabIndex="0"
              >
                <span className="help-icon">
                  <i className="fas fa-question-circle"></i>
                </span>
              </Tooltip>
            </MuiThemeProvider>
          </div>
          <div className="link-text">
            {ReactHtmlParser(
              `<a href="${redirect}/${this.props.item.custom_key}">${redirect}/${this.props.item.custom_key}</a>`
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Citation;
