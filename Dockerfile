# Використовуємо офіційний образ Node.js з Cypress
FROM cypress/included:13.15.2

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо всі залежності
RUN npm install

# Копіюємо весь проект в контейнер
COPY . .

# Виконуємо тестування через npm
CMD ["npm", "test"]
