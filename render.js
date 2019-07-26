var maxNumPage = '';
var maxNumPageTodo = '';


var renderListPost = function(data, element) {
    "use strict";

    var template = "";

    // console.log(headIdUser.id);

    if (data.data.length === 0) {
        template += '<tr>';
        template += '<td colspan="7">' + ' Not Found User ' + '</td>';
        template += '</tr>'
    } else {
        var headUser = _.head(data.data);
        var headIdUser = headUser.id;
        headUserId = headIdUser;
    }
    _.forEach(data.data, function(value) {
        template += '<tr>';
        template += '<td>' + value.id + '</td>';
        template += '<td>' + value.name + '</td>';
        template += '<td>' + value.username + '</td>';
        template += '<td>' + value.email + '</td>';
        template += '<td>' + value.phone + '</td>';
        template += '<td>' + value.website + '</td>';
        template += '<td class="colEdit"><button class="btn btn-warning" onclick="editPost(' + value.id + ')" data-toggle="modal" data-target="#createuserModal">Edit</button></td>';
        template += `<td class="colDel"><button class="btn btn-danger" onclick="deletePost('${value.id}')">Delete</button></td>`;
        template += '<td class="colEdit"><button class="btn btn-success" onclick="getTodos(' + value.id + ')">Detail</button></td>';
        template += '</tr>';
    });
    element.innerHTML = template;
}

var renderListTodos = function(data, element) {
    "use strict"
    var template = "";
    if (data.data.length === 0) {
        template += '<tr>';
        template += '<td colspan="4">' + ' Not Found Data ' + '</td>';
        template += '</tr>'
    }

    _.forEach(data.data, function(value) {
        template += '<tr>';
        template += '<td>' + value.title + '</td>';
        template += '<td>' + value.complete + '</td>';
        template += '<td class="colEdit"><button class="btn btn-warning" onclick="editTodos(' + value.id + ')" data-toggle="modal" data-target="#createtodoModal">Edit</button></td>';
        template += `<td class="colDel"><button class="btn btn-danger" onclick="deleteTodos('${value.id}')">Delete</button></td>`;
        template += '</tr>';
    });
    element.innerHTML = template;

};

var renderNumPage = function(data, element) {
    "use strict"
    var template = "";
    if (data.data.length === 0) {
        template = "";
    }

    var numPage;

    numPage = Math.ceil(data.data.length / 5)

    maxNumPage = numPage;
    template += '<li class="previous" onclick="previousPageUser()"><a href="#">Previous</a></li>'
    for (var i = 1; i <= (numPage); i++) {

        template += '<li id="idNumUser" class="numUser" data-id="' + i + '">'
        template += '<a>' + i + '</a>'
        template += '</li>'

    }
    template += '<li class="next" onclick="nextPageUser()"><a href="#">Next</a></li>'
    element.innerHTML = template;
}




var renderNumPageTodos = function(data, element) {
    "use strict"
    var template = "";
    if (data.data.length === 0) {
        template = "";
    }

    var numPage;
    numPage = Math.ceil(data.data.length / 4);

    maxNumPageTodo = numPage;

    template += '<li class="previous" onclick="previousPageTodos()"><a href="#">Previous</a></li>'
    for (var i = 1; i <= (numPage); i++) {
        template += '<li id="idNumTodos" class="numTodos" data-id="' + i + '">'
        template += '<a>' + i + '</a>'
        template += '</li>'
    }
    template += '<li class="next" onclick="nextPageTodos()"><a href="#">Next</a></li>'
    element.innerHTML = template;
}