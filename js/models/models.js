// models/models.ts
// Enum for User Roles
export var UserRole;
(function (UserRole) {
    UserRole["Sender"] = "Sender";
    UserRole["Driver"] = "Driver";
    UserRole["Recipient"] = "Recipient";
})(UserRole || (UserRole = {}));
// Enum for Delivery Status
export var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["Pending"] = "Pending";
    DeliveryStatus["Accepted"] = "Accepted";
    DeliveryStatus["InTransit"] = "InTransit";
    DeliveryStatus["Delivered"] = "Delivered";
    DeliveryStatus["Cancelled"] = "Cancelled";
})(DeliveryStatus || (DeliveryStatus = {}));
// Enum for Rider Status
export var RiderStatus;
(function (RiderStatus) {
    RiderStatus["Available"] = "available";
    RiderStatus["Unavailable"] = "unavailable";
})(RiderStatus || (RiderStatus = {}));
