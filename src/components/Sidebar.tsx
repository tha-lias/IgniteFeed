import React from 'react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>

                <Avatar src="https://github.com/tha-lias.png" />

                <strong>Thalia Silva</strong>
                <span>Web Developer</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20} />

                    Editar seu perfil</a>
            </footer>
        </aside>
    );
}