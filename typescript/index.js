//   let a:number=35
//   console.log(a );
//   let b=45
// //   b="52" it takes first initall value
// let c:boolean=true
// console.log(c);
// let d="akshu"
// console.log(d);
var munlcipality1 = { mulcipalityId: 1, name: "GHMC", code: "GHMC" };
var munlcipality2 = { mulcipalityId: 2, name: "srd", code: "srd" };
var munlcipality3 = { mulcipalityId: 3, name: "Gnt", code: "gnt" };
var munlcipality4 = { mulcipalityId: 4, name: "krmc", code: "krmc" };
var munlcipality5 = { mulcipalityId: 5, name: "vyjay", code: "vyyyyy" };
var district1 = { districtId: 1, name: "Hyderabad", code: "HYD", mulcipalitys: [munlcipality1] };
var district2 = { districtId: 2, name: "Sangareddy", code: "SRD", mulcipalitys: [munlcipality2] };
var district3 = { districtId: 3, name: "Guntur", code: "gn", mulcipalitys: [munlcipality3] };
var district4 = { districtId: 4, name: "krishna", code: "kr", mulcipalitys: [munlcipality4] };
var state1 = { stateId: 1, name: "Telangana", code: "TS", district: [district1, district2] };
var state2 = { stateId: 2, name: "Andhra Pradesh", code: "AP", district: [district3, district4] };
var states = [state1, state2];
var district5 = { districtId: 5, name: "vijaywada", code: "vjy", mulcipalitys: [] };
var newStates = states.map(function (state) {
    if (state.stateId === 2) {
        state.district.push(district5);
    }
    return state;
});
newStates = newStates.map(function (state) {
    state.district.map(function (district) {
        if (district.districtId == 5) {
            district.mulcipalitys.push(munlcipality5);
        }
        return district;
    });
    return state;
});
console.log(newStates);
states.forEach(function (state) {
    state.district.forEach(function (district) {
        console.log(district);
        // district.mulcipalitys.forEach(municipality=>{
        // console.log(state.name+" "+district.name+" "+municipality.name);
    });
});
