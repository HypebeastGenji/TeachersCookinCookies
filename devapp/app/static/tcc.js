const recentBtn = document.getElementById('recent-btn')
const aboutBtn = document.getElementById('about-btn')
const orderBtn = document.getElementById('order-btn')
const main = document.getElementById('main')


function displayRecent() {
    // get data 
    // return and display
    main.innerHTML = '<div><h1>Recent</h1></div>'


}

function displayAbout() {
    main.innerHTML = `<div id="about">
    <div class="about">
        <div class="img-gallery">
            <!-- <img class="about-img" src="../static/img/pfp.jpg"/> -->
            <!-- <img src="" alt=""> -->
            <!-- Image Slider - ref: https://codepen.io/gagneow/pen/BoWroQ -->
            <ul class="slides">
                <input type="radio" name="radio-btn" id="img-1" checked />
                <li class="slide-container">
                    <div class="slide">
                        <img src="../static/img/pfp.jpg" />
                    </div>
                  
                    <div class="nav">
                        <label for="img-3" class="prev">&#x2039;</label>
                        <label for="img-2" class="next">&#x203a;</label>
                    </div>
                </li>
            
                <input type="radio" name="radio-btn" id="img-2" />
                <li class="slide-container">
                    <div class="slide">
                      <img src="../static/img/GLM.jpg" />
                    </div>
                    <div class="nav">
                        <label for="img-1" class="prev">&#x2039;</label>
                        <label for="img-3" class="next">&#x203a;</label>
                    </div>
                </li>
            
                <input type="radio" name="radio-btn" id="img-3" />
                <li class="slide-container">
                    <div class="slide">
                      <img src="../static/img/GLK.jpg" />
                    </div>
                    <div class="nav">
                        <label for="img-2" class="prev">&#x2039;</label>
                        <label for="img-1" class="next">&#x203a;</label>
                    </div>
                </li>
            
                <li class="nav-dots">
                  <label for="img-1" class="nav-dot" id="img-dot-1"></label>
                  <label for="img-2" class="nav-dot" id="img-dot-2"></label>
                  <label for="img-3" class="nav-dot" id="img-dot-3"></label>
                  </li>
            </ul>
            <!-- Image Slider - END -->
            
        </div>
        <div class="about-info">
            <h2>About the Teachers</h2>
            <hr class="rounded">
            <p>Lorem ipsum dolor sit amet, audire veritus fuisset eu est, menandri incorrupte ut est. Amet argumentum disputando ei ius, ex verear quaeque his, simul inermis pertinax nam no. Vix ne assum facilisi, eum eros bonorum assentior eu, nam eu ludus forensibus. Invidunt moderatius scribentur no vix, duo te error primis. Cu liber aeque populo cum, vis ea principes dignissim.

                Facilisi necessitatibus duo ne, ea porro omnium periculis pri, mei ei mollis fabulas erroribus. Sed eros maiestatis ex, vix ea sint veritus nostrum, vis veniam constituto sadipscing ex. Ne pri praesent consetetur. Vero natum laoreet sit ei.</p>
                
            <p>Vim eu conceptam appellantur, altera nostro et pro. Mei ad propriae electram, sumo paulo facilis nec id. Ius id vide constituam concludaturque, eu possim albucius vim. Ex case scriptorem est, sit equidem inimicus ad. Ex duo sale principes. Ea possim dissentias his.
                
                An has insolens mandamus, quis saepe vix ea. Autem splendide no has, malis definitionem nec ut. Cu mei graeco habemus, tollit vidisse ut ius. Qui in nibh pericula, has ut omnes primis impetus. Pro tota nostrud vituperata et.</p>
                
            <p>    Aeterno diceret facilisis an mel, mei cu laoreet accusam consequuntur. Quis omittantur reformidans his ei, porro pericula corrumpit pro ut. Has eu case elit voluptatibus. Veri epicurei scribentur nam ad, te rebum tollit aliquam qui, eu clita veritus gubergren mel.
                Aeterno diceret facilisis an mel, mei cu laoreet accusam consequuntur. Quis omittantur reformidans his ei, porro pericula corrumpit pro ut. Has eu case elit voluptatibus. Veri epicurei scribentur nam ad, te rebum tollit aliquam qui, eu clita veritus gubergren mel.
                Aeterno diceret facilisis an mel, mei cu laoreet accusam consequuntur. Quis omittantur reformidans his ei, porro pericula corrumpit pro ut. Has eu case elit voluptatibus. Veri epicurei scribentur nam ad, te rebum tollit aliquam qui, eu clita veritus gubergren mel.
            </p>

        </div>

    </div>
    

</div>`

}

function displayOrder() {

    main.innerHTML = '<div><h1>Orders</h1></div>'

}


recentBtn.onclick = displayRecent
aboutBtn.onclick = displayAbout
orderBtn.onclick = displayOrder


function placeOrder() {
    const name = document.getElementById('customer-name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')
    const quantity = document.getElementById('quantity')
    const description = document.getElementById('description')

    const inputFields = [name, email, subject, quantity, description]

    order = {
        "name": name.value,
        "email": email.value,
        "subject": subject.value,
        "qty": quantity.value,
        "body": description.value
    }
    // console.log(order.length)
    console.log(Object.keys(order).length)
    keys = Object.keys(order)
    console.log(keys)

    let flags = 0
    for (i=0;i<keys.length;i++) {
        console.log(i);
        console.log(order[keys[i]]);
        if (order[keys[i]] == '') {
            console.log('failed');
            flags++;
        }

        // NEED TO CHECK FOR VALID EMAIL
    }
    console.log('flags')
    console.log(flags)

    if (flags == 0) {
        sendOrder(order)
            .then((data) => {
                console.log(data)
                for (i=0;i<inputFields.length;i++) {
                    inputFields[i].value = ''
                    console.log('hey')
                }
            })
    }


}

async function sendOrder(order) {
    const orderRequest = await fetch('http://127.0.0.1:5000/api/order/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    return orderRequest.json()
}


function openMail() {
    window.open(`mailto:teacherscookincookies@gmail.com?subject=Order Request - QTY:&body=Please enter the quantity in subject field and leave your request below`)

}





function hey() {
    console.log('hey')
}

