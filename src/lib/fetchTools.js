export const fetchSiteDetails = async (component, siteName) => {
  let response = null;
  let data = null;
  try {
    data = JSON.parse(
      sessionStorage.getItem(`${siteName.toLowerCase()}_config`)
    );
  } catch (error) {
    console.log("Site details not in storage");
  }
  if (data === null) {
    console.log("Fetching site details");
    try {
      response = await fetch(
        `${process.env.REACT_APP_CONFIG_PATH}/${siteName.toLowerCase()}.json`
      );
      data = await response.json();
    } catch (error) {
      console.error(`Error fetching config file`);
      console.error(error);
    }
    if (data === null) {
      try {
        response = await fetch(
          `${process.env.REACT_APP_CONFIG_PATH}/default.json`
        );
        data = await response.json();
      } catch (error) {
        console.error("Error fetching default.json");
        console.error(error);
      }
    } else {
      sessionStorage.setItem(
        `${siteName.toLowerCase()}_config`,
        JSON.stringify(data)
      );
    }
  }
  component.setState({
    siteDetails: data
  });
};

export function getHTML(copyObj, component) {
  let copy = null;
  try {
    if (copyObj.type === "string") {
      copy = copyObj.value;
    } else if (copyObj.type === "file") {
      fetchCopyHTML(copyObj, component);
    }
  } catch (error) {
    console.error("Error setting copy for component");
  }
  if (copy !== null) {
    component.setState({ copy: copy });
  }
}

const fetchCopyHTML = async (copyObj, component) => {
  let data = null;
  try {
    data = sessionStorage.getItem(copyObj.value);
  } catch (error) {
    console.log(`${copyObj.value} not in sessionStorage`);
  }
  if (data === null) {
    try {
      const copyLink = `${process.env.REACT_APP_CONFIG_PATH}/${copyObj.value}`;
      console.log(`fetching copy from: ${copyLink}`);
      const response = await fetch(copyLink);
      data = await response.text();
    } catch (error) {
      console.error(
        `Error fetching html for ${component.constructor.name} component`
      );
      console.error(error);
    }
  }
  if (data !== null) {
    sessionStorage.setItem(copyObj.value, data);
    component.setState({ copy: data });
  }
};

export const fetchLanguages = async (component, key, callback) => {
  let data = null;
  try {
    data = JSON.parse(sessionStorage.getItem(`lang_by_${key}`));
  } catch (error) {
    console.log(`lang_by_${key} not in sessionStorage`);
  }
  if (data === null) {
    console.log(`fetching by lang_by_${key}`);
    let response = null;
    try {
      const htmlLink = `${process.env.REACT_APP_CONFIG_PATH}/language_codes_by_${key}.json`;
      response = await fetch(htmlLink);
      data = await response.json();
    } catch (error) {
      console.error(`Error fetching languages`);
      console.error(error);
    }
  }
  if (data !== null) {
    sessionStorage.setItem(`lang_by_${key}`, JSON.stringify(data));
    component.setState({ languages: data }, function() {
      if (typeof component.loadItems === "function") {
        component.loadItems();
      }
    });
  }
};