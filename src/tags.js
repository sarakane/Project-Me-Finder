//import

//mock api call we have an object
// function-- that 
//--add a "tag" key pair "" to movie object
//{gender: , ethicities: ,minority lead: ,minority director: , lbgtqia+(): }
//we have est. lead(s)/director
//we est. identities: gender, ethnicities, minority lead. minority director, lbgtqia+()
//UI?
//

//tags {
//   Lead Actor 1: [Male, Black, Gay]
//   Lead Actor 2:
//   Director:
//   ethinicity: 
// }
// the ui asks the user what category ( lead actor, director) they would like to tag, then they can add which identifiers they want to use. and maybe a checkbox of all the applicable ids.
//output

// export function tags {
//   constructor () {}

//   addtags() {

//   }

//   pushtags(){}

//   pushtitle(){}
// }

// export class movietags(){
//   constructor() {
//     this.taggedMovies = [];
//   }
//
// }

constructor() {
  this.tag = [];
}

<form id="tags">
      <div class="form-group">
        <p>Select from the following identifiers</p>
        <input type="checkbox" name="id-tags" value="bipoc">BIPOC<br>
        <input type="checkbox" name="id-tags" value="lesbian">Lesbian<br>
        <input type="checkbox" name="id-tags" value="gay">Gay<br>
        <input type="checkbox" name="id-tags" value="queer">Queer<br>
        <input type="checkbox" name="id-tags" value="apa">Asian Pacific American.<br>
        <input type="checkbox" name="id-tags" value="bipoc">Latinx<br>
        <input type="checkbox" name="id-tags" value="bipoc">Black<br>
        <input type="checkbox" name="id-tags" value="bipoc">Indigenous<br>
        <input type="checkbox" name="id-tags" value="bipoc">Nuerodivergent<br>
        <input type="checkbox" name="id-tags" value="bipoc">Asexual</br>
        <input type="checkbox" name="id-tags" value="bipoc">LGBTQIA</br>
        <input type="checkbox" name="id-tags" value="bipoc">Mid Eastern</br>
        <input type="checkbox" name="id-tags" value="bipoc">Indian<br>
        
      </div>
      <button type="submit">Submit</button>
    </form>

    $("input:checkbox[name=id-tags]:checked").each(function() {
      const checkedtags = $(this).val();
//this gets pushed to object.

