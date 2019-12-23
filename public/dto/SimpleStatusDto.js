module.exports = class SimpleStatusDto {
  constructor(json) {
    try {
      if (typeof json === "string") json = JSON.parse(json);
      this.message = json.message;
      this.status = json.status;
    }
    catch (e) {
      throw new Error("Unable to create dto 'SimpleStatusDto' : " + e.message);
    }
  }

  toString() {
    JSON.stringify(this);
  }

  isValid() {
    if (this.status === "VALID") return true;
    return false;
  }
};
