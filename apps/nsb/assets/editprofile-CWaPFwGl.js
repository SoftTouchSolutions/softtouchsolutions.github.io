var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class ProfileService {
  constructor() {
    __publicField(this, "image", "../../../../assets/images/users/16.jpg");
  }
  static handleChange(ele) {
    const [file] = ele.target.files;
    this.image = URL.createObjectURL(file);
    this.returnImage();
  }
  static returnImage() {
    return this.image;
  }
  static handleChangeUrl(link) {
    this.image = link;
    this.returnImage();
  }
}
class EditProfileService {
  constructor() {
    __publicField(this, "firstName", "Petey ");
    __publicField(this, "lastName", "Cruiser");
    __publicField(this, "role", "Web Developer");
  }
  static editDataFrom(firstName, lastName, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }
  static returnId() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role
    };
    return data;
  }
}
export {
  EditProfileService as E,
  ProfileService as P
};
