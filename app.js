document.addEventListener('DOMContentLoaded', () => {

  var friend = ['Dan', 'Eric', 'Sue', 'Jill', 'Rae'];
  var weapon = ['Hammer', 'Blade', 'Brick', 'Sward', 'Gun', 'Bat', 'Bar', 'Shoe', 'Crowbar', 'bottle', 'Pin', 'Sand', 'Paper', 'computer', 'nail gun', 'glass', 'chair', 'waggon', 'car', 'truck', 'van'];
  var location = ['Kansas', 'Montana', 'CA', 'NY', 'FL', 'Main', 'Tower', 'Downtown', 'road', 'Inside'];


  for (i = 1; i < 100; i++) {
    var h3 = document.createElement('h3');
    var h3Txt = document.createTextNode(`Accusation ${i}`);

    h3.appendChild(h3Txt);
    h3.addEventListener('click', doStuff(i));
    document.body.appendChild(h3);
  }

  function doStuff(i) {
    return function () {
      alert(`Accusation ${i}: I accuse ${friend[i % friend.length]}, with the ${weapon[i % weapon.length]} in the ${location[i % location.length]}`)
    }
  }
})  