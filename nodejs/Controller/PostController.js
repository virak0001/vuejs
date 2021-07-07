const fs=require('fs');
let posts = JSON.parse(fs.readFileSync('./data/posts.json'));

exports.index = function(req, res){
    res.send(posts);
}

exports.store = function(req, res) {
    let id = posts.length+1
    let post = { author, date, description } = req.body
    posts.push({ id, ...post })
    fs.writeFileSync('data/posts.json',JSON.stringify(posts))
    return res.send(
        { message:  'Post created success!'}
    );
}

exports.update = function(req, res) {
    let id = req.params.id;
    let { author, date, description } = req.body
    let isPostFount = false
    posts.find((item, index) => {
        if(item.id === parseInt(id)){
            let post = posts[index]
            post.author = author
            post.date = date
            post.description = description
            isPostFount = true
            return res.send('Post updated success!')
        }
    })
    isPostFount? '' : res.send('Post not found!')
}