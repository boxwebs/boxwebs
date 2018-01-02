function logInAsGuest(GuestId) {
document.cookie = "GuestID=" + GuestId;
}
logInAsGuest("dev1");
