  const treks = [
    {
      name: "kedarkantha",
      duration: "4D/5N",
      distance: "20/40km",
      altitude: "12,500ft / 3800m",
      time: "November to April",
      difficulty: "moderate",
      location: "Uttarakhand",
      budget: "6k to 9k",
      href:"/public/kedarkantha.html"
    },
    {
      name: "Brahmatal",
      duration: "5D/6N",
      distance: "15/30km",
      altitude: "10,250ft / 3735m",
      time: "November to February",
      difficulty: "moderate",
      location: "Uttarakhand",
      budget: "6k to 9k",
      href:"/public/brahmatal.html"
    },
    {
      name: "Dayara Buggal",
      duration: "3D/4N",
      distance: "10/20km",
      altitude: "11,810ft / 3600m",
      time: "December to March",
      difficulty: "easy",
      location: "Uttarakhand",
      budget: "5500 to 9000",
      href:"/public/dyara-bugyal.html"
    },
    {
      name: "Chandrashila",
      duration: "3D/4N",
      distance: "10/20km",
      altitude: "11,810ft / 3600m",
      time: "December to March",
      difficulty: "easy",
      location: "Uttarakhand",
      budget: "5500 to 9000",
      href:"/public/tungnath.html"
    }
  ];
  
  const blogs = [
    {
      author: "Vaibhav",
      date: "2024-11-13",
      contentSnippet: "A memorable advanture with safarwallah",
      location: "Uttarakhand",
      href:"/public/blogs/a-memorable-advanture-with-safarwallah.html"
    },
    {
      author: "Sameekshya",
      date: "2024-11-06",
      contentSnippet: "Escaping the city with safarwallah",
      location: "Uttarakhand",
      href:"/public/blogs/Escaping-the-City-with-Safarwallah.html"
    },
    {
      author: "Gaurav",
      date: "2024-09-21",
      contentSnippet: "The Ultimate Guide to Treeking in winter",
      location: "Uttarakhand",
      href:"/public/blogs/The-Ultimate-Guide-to-Trekking-in-Winter.html"
    },
    {
      author: "Abhishek",
      date: "2024-10-30",
      contentSnippet: "Essential Trekking gear for a safe himalyan advanture",
      location: "Uttarakhand",
      href:"public/blogs/Essential-Trekking-Gear-for-a-Safe-Himalayan-Adventure.html"
    }
  ];
  
  /// Function to filter treks and blogs
function searchTreksAndBlogs(query) {
  query = query.toLowerCase();

  const filteredTreks = treks.filter(trek => {
    return (
      trek.name.toLowerCase().includes(query) ||
      trek.duration.toLowerCase().includes(query) ||
      trek.distance.toLowerCase().includes(query) ||
      trek.altitude.toLowerCase().includes(query) ||
      trek.time.toLowerCase().includes(query) ||
      trek.difficulty.toLowerCase().includes(query) ||
      trek.location.toLowerCase().includes(query) ||
      trek.budget.toLowerCase().includes(query)
    );
  });

  const filteredBlogs = blogs.filter(blog => {
    return (
      blog.author.toLowerCase().includes(query) ||
      blog.date.toLowerCase().includes(query) ||
      blog.contentSnippet.toLowerCase().includes(query)
    );
  });

  return { filteredTreks, filteredBlogs };
}

// Display filtered results
function displayResults(results) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = ''; // Clear previous results

  const { filteredTreks, filteredBlogs } = results;

  if (filteredTreks.length === 0 && filteredBlogs.length === 0) {
    resultContainer.innerHTML = '<p>No results found</p>';
  } else {
    // Display Treks
    filteredTreks.forEach(trek => {
      resultContainer.innerHTML += `
      <a href="${trek.href}">
        <div class="flex flex-row w-full justify-between py-2 px-2 border-b items-center">
          <div class="flex gap-4">
            <h4>${trek.name}</h4>
            <p>${trek.location}</p>
          </div>
        </div>
      </a>`;
    });

    // Display Blogs
    filteredBlogs.forEach(blog => {
      resultContainer.innerHTML += `
      <a href="${blog.href}">
        <div class="flex flex-row w-full justify-between py-2 px-2 border-b items-center">
          <div class="flex gap-4">
            <h4>${blog.author}</h4>
            <p>${blog.contentSnippet}</p>
          </div>
        </div>
      </a>`;
    });
  }
}

// Handle input and loader visibility
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value;
  const loader = document.getElementById('loader');
  const resultContainer = document.getElementById('resultContainer');

  // Show loader
  loader.style.display = 'flex';

  // Simulate a slight delay to mimic async processing
  setTimeout(() => {
    const results = searchTreksAndBlogs(query);
    displayResults(results);

    // Hide loader
    loader.style.display = 'none';
  }, 500); // Adjust delay as necessary
});




function toggleSearchPopup() {
    const popup = document.getElementById('searchPopup');
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "flex";
      setTimeout(() => {
        popup.style.opacity = "1";  // Smooth transition effect
      }, 10);
    } else {
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);  // Wait for the opacity transition to finish
    }
  }