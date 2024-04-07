<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message';

export default {
    name: 'contact-us',
    data: () => ({

        form: {
            email: '',
            subject: '',
            message: ''
        }
    }),

    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { })
                .catch(err => { console.error(err) })
                .then((() => { }))
        }
    }
}
</script>

<template>
    <form @submit.prevent="sendForm">

        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model.trim="form.email" required type="email" class="form-control" id="email"
                aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto della mail</label>
            <input v-model.trim="form.subject" required type="text" class="form-control" id="subject">
        </div>
        <div class="form-floating">
            <label for="message"></label>
            <textarea v-model.trim="form.message" class="form-control" placeholder="Leave a comment here"
                id="message"></textarea>
        </div>
        <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Invia</button>
        </div>
    </form>
</template>

<style lang='scss' scoped>
/* style here */
</style>
