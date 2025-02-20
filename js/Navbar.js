const navbar = document.querySelector("navbar");
if (navbar) {
  navbar.innerHTML = `
<header class="z-[99]">
    <nav class="flex justify-center items-center text-white p-5 fixed w-full bg-gradient-to-b from-[#1E1E1E] to-transparent">
        <img src="../assets/logo.png" alt="Website Logo" class="w-32" />
    </nav>
</header>

        `;
}
