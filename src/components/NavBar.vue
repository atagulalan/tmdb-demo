<template>
  <nav class="navBarComponent">
    <div class="container flex-center">
      <div class="navigationSection">
        <router-link to="/">
          <div class="logo">
            <img alt="TMDB" src="../assets/logo.svg" />
          </div>
        </router-link>
        <ul>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
      <div class="userSection">
        <ul>
          <li class="new">
            <button>
              <font-awesome-icon icon="plus" :style="{ fontSize: '18px' }" />
            </button>
          </li>
          <li class="languageSelector">
            <button class="box">EN</button>
          </li>
          <li class="notifications">
            <button>
              <font-awesome-icon icon="bell" :style="{ fontSize: '16px' }" />
            </button>
          </li>
          <li class="avatar">
            <button class="mockAvatar">AG</button>
          </li>
          <li class="search">
            <button>
              <font-awesome-icon
                icon="search"
                :style="{ color: '#01B4E4', fontSize: '21px' }"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    activeItem: String
  }
}
</script>

<style scoped lang="scss">
.navBarComponent {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: white;

  .container {
    height: 100%;
    padding: 0 36px;
    justify-content: space-between;
    max-width: var(--maxPrimaryPageWidth);

    .logo {
      width: 154px;
      height: 100%;
      margin-right: 16px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .navigationSection,
    .userSection {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      align-items: stretch;
      overflow: visible;

      ul {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        list-style: none;
        li {
          display: flex;
          align-items: center;
          a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            padding: 8px;
          }
        }
      }
    }

    .navigationSection ul li {
      margin-right: 14px;
    }

    .userSection {
      margin-right: 8px;
      ul li {
        margin-left: 26px;
      }

      button {
        width: 32px;
        height: 32px;
        cursor: pointer;
      }

      .avatar .mockAvatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: rgba(var(--accountTeal), 1);
        border-radius: 50%;
        font-weight: 900;
      }

      .languageSelector .box {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 28px;
        height: 26px;
        border: 1px solid white;
        border-radius: 2px;
        transition: 0.3s background, 0.3s color;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;

        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }
}
</style>
