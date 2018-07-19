$(document).ready(function () {
  console.log('Init app')

  function getData (url, cbk) {
    var jqxhr = $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  var urlBase = 'https://swapi.co/api/' + 'people/5/'

  getData(urlBase, getInfo)

  function getData (error, data) {
    if (!error) {
      showPeopleNames(data.results)
      if (data.next) {
        getData(data.next, getInfo)
      }
    } else {
      console.log('Error', error)
    }
  }

  function getInfo(){
    
  }
  function showPeopleNames (people) {
      console.log(people.name)
    }
  }
})
