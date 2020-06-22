console.log("CV-SCREENER");

data = [
    {
        name:"Rahul Goyal",
        age:27,
        city:"Gwalior",
        language:"Python",
        framework:"PyTorch",
        img:'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name:"Anushka Soni",
        age:21,
        city:"Pune",
        language:"Java",
        framework:"Swing",
        img:'https://randomuser.me/api/portraits/women/47.jpg'
    },

    {
        name:"Mukesh Sadan",
        age:33,
        city:"Jabalpur",
        language:"JavaScipt",
        framework:"angular",
        img:'https://randomuser.me/api/portraits/men/77.jpg'
    },

    {
        name:"Manisha Gold",
        age:31,
        city:"Delhi",
        language:"Scala",
        framework:"Tableau",
        img:'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name:"Shivam Mahajan",
        age:25,
        city:"Mumbai",
        language:"Go",
        framework:"golang",
        img:'https://randomuser.me/api/portraits/men/61.jpg'
    }
] 

function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);
nextCv();

const next = document.getElementById('next');
next.addEventListener('click',nextCv);

function nextCv() {
    const currentCandidate = candidates.next().value;
    console.log(currentCandidate);
    let image = document.getElementById('image');
    let profiles = document.getElementById('profiles');
    if(currentCandidate != undefined) {
        image.innerHTML = `<img src ='${currentCandidate.img}'>`;
        profiles.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name:${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Language known ${currentCandidate.language}</li>
                                <li class="list-group-item">Primary works on ${currentCandidate.framework} framework</li>
                            </ul>` 
    }
    else {
        alert('End of Candidate Application');
        window.location.reload();
    }
}