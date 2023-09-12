function addSongName() {
    const songNameInput = document.getElementById("songNameInput");
    const songName = songNameInput.value.trim();

    if (songName !== "") {
      const songList = document.getElementById("songNameList");
      const listItem = document.createElement("li");
      listItem.textContent = songName;
      songList.appendChild(listItem);

      // Clear the input field after adding the name
      songNameInput.value = "";
    }
  }