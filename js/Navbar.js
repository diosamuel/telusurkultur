const navbar = document.querySelector("navbar");
if (navbar) {
  navbar.innerHTML = `
<header>
    <nav class="flex justify-between items-start text-white p-5 fixed w-full bg-gradient-to-b from-[#1E1E1E] to-transparent">
        <!-- Toggle Button for Mobile -->
        <button id="nav-toggle" class="text-white text-2xl">☰</button>

        <!-- Left Navigation Links -->
        <ul class="flex font-manrope gap-4 md:flex md:hidden">
            <li><a href="#" class="text-xl hover:text-gray-300">Home</a></li>
            <li><a href="#" class="text-xl hover:text-gray-300">Sejarah</a></li>
            <li><a href="#" class="text-xl hover:text-gray-300">Belajar Wayang</a></li>
            <li><a href="#" class="text-xl hover:text-gray-300">Batik Mix&Match</a></li>
        </ul>

        <!-- Logo -->
        <img src="../assets/logo.png" alt="Website Logo" class="w-32" />

        <!-- Right Navigation Links -->
        <ul class="flex font-manrope gap-4 md:flex hidden">
            <li><a href="#" class="text-xl hover:text-gray-300">About Us</a></li>
        </ul>
    </nav>
</header>

        `;
}

let $leftNav = $("nav ul:first-child"); // Target first <ul> (left nav)

// Add a button for toggling (if not already present)
if ($("#nav-toggle").length === 0) {
  $("nav").prepend(
    '<button id="nav-toggle" class="text-white md:hidden">☰</button>'
  );
}

$("#nav-toggle").on("click", function () {
  if ($leftNav.is(":visible")) {
    $leftNav.slideUp(300); // Close with animation
  } else {
    $leftNav.slideDown(300); // Open with animation
  }
});
