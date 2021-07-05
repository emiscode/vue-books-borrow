<template>
  <main-layout>
    <main-layout-account></main-layout-account>
    <div class="initial-load box-content">
      <div class="row">
        <div
          class="col m3 box-book"
          v-for="book of booksList.books"
          :key="book.id"
        >
          <div class="box-book-info">
            <p class="text-title">{{ book.title }}</p>
            <p><span class="pre-text">Author: </span>{{ book.author }}</p>
            <p><span class="pre-text">Pages: </span>{{ book.pages }}</p>
          </div>
          <a class="waves-effect waves-light btn-small btn-details"
            ><i class="material-icons left">import_contacts</i>Details</a
          >
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import MainLayoutAccount from '../layouts/MainAccount.vue'
import Books from '../services/books'

export default {
  components: {
    MainLayout,
    MainLayoutAccount,
  },

  data() {
    return {
      books: {
        id: null,
        name: null,
        description: null,
        genres: null,
        rentValue: null,
        seasons: null,
        year: null,
      },
      booksList: [],
      errors: [],
    }
  },

  mounted() {
    this.listAll()
    console.log(localStorage.userAuthId)
    console.log(localStorage.userAuthToken)
  },

  methods: {
    logout() {
      localStorage.removeItem('BBS_userAuthToken')
      window.location.href = '/'
    },
    listAll() {
      Books.listAll().then(res => {
        this.booksList = res.data
      })
    },

    save() {
      this.enableForm(false)

      if (!this.books.id) {
        Books.save(this.books)
          .then(() => {
            this.books = {}
            this.errors = []
            this.listAll()
            alert(`Saved!`)
          })
          .catch(e => {
            this.errors = e.response.data.errors
          })
      } else {
        Books.update(this.books)
          .then(() => {
            this.books = {}
            this.errors = []
            this.listAll()
            alert(`Updated!`)
          })
          .catch(e => {
            this.errors = e.response.data.errors
          })
      }
    },

    edit(books) {
      this.enableForm(true)
      this.books = books
      this.disableInputs(false)
      document.querySelector('#name').focus()
    },

    remove(books) {
      this.books = books
      this.disableInputs(true)

      if (confirm(`Are you sure you want to delete '${this.books.name}'?`)) {
        Books.delete(books)
          .then(() => {
            this.books = {}
            this.listAll()
            this.errors = []
            alert('Deleted!')
          })
          .catch(e => {
            this.errors = e.response.data.errors
          })
      }
    },

    disableInputs(value) {
      document.querySelectorAll('input').forEach(element => {
        element.disabled = value
      })
    },

    enableForm(isEnable) {
      if (isEnable)
        document.querySelector('.box-form').classList.add('box-form-enabled')
      else
        document.querySelector('.box-form').classList.remove('box-form-enabled')
    },
  },
}
</script>

<style scoped>
.text-title {
  font-weight: bold;
}
.pre-text {
  font-weight: bold;
  font-size: 12px;
  color: #555;
  font-style: italic;
}
.box-book {
  min-height: 200px;
  margin-bottom: 30px;
}
.btn-details {
  background: #d2b48c;
  color: #8b4513;
}
.box-book-info {
  min-height: 150px;
}

.box-content {
  padding: 25px;
  border: 2px solid #8b4513;
}
</style>
