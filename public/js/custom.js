/*
    Author: Ura Novic
    Date: 2/7/2018 
    Description: NodeJS Based Blockchain Frontend Test
*/


//base_url
var base_url = 'http://localhost:3001';
//html format func
function attach_html(title, data) {
    return "<a class='list-group-item'>" + title + " : " + data + "</a>";
}
//get All Blocks func
function getAllBlock() {
    $.ajax({
        type: 'GET',
        url: base_url + '/blocks',
        success: function(res) {
            var html = "";
            console.log(res['0']);
            var data_id = res['0']['data']['0']['id'];
            var data_txIns_signature = res['0']['data']['0']['txIns']['0']['signature'];
            var data_txIns_txOutId = res['0']['data']['0']['txIns']['0']['txOutId'];
            var data_txIns_txOutIndex = res['0']['data']['0']['txIns']['0']['txOutIndex'];
            var data_txOuts_address = res['0']['data']['0']['txOuts']['0']['address'];
            var data_txOuts_amount = res['0']['data']['0']['txOuts']['0']['amount'];
            var difficuly = res['0']['difficulty'];
            var hash = res['0']['hash'];
            var index = res['0']['index'];
            var nonce = res['0']['index'];
            var previousHash = res['0']['previousHash'];
            var timestamp = res['0']['timestamp'];
            html = attach_html('id', data_id) +
                attach_html('signature', data_txIns_signature) +
                attach_html('txOutId', data_txIns_txOutId) +
                attach_html('txOutIndex', data_txIns_txOutIndex) +
                attach_html('address', "<span style='font-size:12px;'>" + data_txOuts_address + "</span>") +
                attach_html('amount', data_txOuts_amount) +
                attach_html('difficuly', difficuly) +
                attach_html('index', index) +
                attach_html('nonce', nonce) +
                attach_html('previousHash', previousHash) +
                attach_html('timestamp', timestamp);
            $('#blockchain_info').html(html);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

//get Block by Id func
function getBlock() {
    var id = prompt('please input block id', '');
    if (id == '') {
        alert('please input block id.');
        return false;
    };
    if (id == null) {
        return false;
    };
    $.ajax({
        type: 'GET',
        url: base_url + '/block/' + id,
        success: function(res) {
            console.log(res);
        },
        error: function(err) {
            console.err(err);
        }
    });
}