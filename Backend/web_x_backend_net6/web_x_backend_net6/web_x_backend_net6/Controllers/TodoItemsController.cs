﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using web_x_backend_net6.Models;

namespace web_x_backend_net6.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoItemsController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoItemsController(TodoContext context)
        {
            _context = context;
        }

        //[HttpPost(Name = "PostTodoItem")]
        //public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem todoItem)
        //{
        //    _context.TodoItems.Add(todoItem);
        //    await _context.SaveChangesAsync();

        //    //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
        //    return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        //}

        //private object GetTodoItem()
        //{
        //    throw new NotImplementedException();
        //}

        // GET: TodoItems
        [HttpGet(Name = "IndexTodoItem")]
        public async Task<IActionResult> Index()
        {
              return _context.TodoItems != null ?
                          Ok(await _context.TodoItems.ToListAsync()) :
                          Problem("Entity set 'TodoContext.TodoItems'  is null.");
        }

        // GET: TodoItems/Details/5
        [HttpPost(Name = "DetailTodoItem")]
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null || _context.TodoItems == null)
            {
                return NotFound();
            }

            var todoItem = await _context.TodoItems
                .FirstOrDefaultAsync(m => m.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }

            return Ok(todoItem);
        }

        // GET: TodoItems/Create
        [HttpPost(Name = "CreateTodoItem")]
        public IActionResult Create()
        {
            return Ok();
        }

        // POST: TodoItems/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,IsComplete")] TodoItem todoItem)
        {
            if (ModelState.IsValid)
            {
                _context.Add(todoItem);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return Ok(todoItem);
        }

        // GET: TodoItems/Edit/5
        [HttpPost(Name = "EditTodoItem")]
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null || _context.TodoItems == null)
            {
                return NotFound();
            }

            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }
            return Ok(todoItem);
        }

        // POST: TodoItems/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(long id, [Bind("Id,Name,IsComplete")] TodoItem todoItem)
        {
            if (id != todoItem.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(todoItem);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TodoItemExists(todoItem.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return Ok(todoItem);
        }

        // GET: TodoItems/Delete/5
        [HttpPost(Name = "DeleteTodoItem")]
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null || _context.TodoItems == null)
            {
                return NotFound();
            }

            var todoItem = await _context.TodoItems
                .FirstOrDefaultAsync(m => m.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }

            return Ok(todoItem);
        }

        // POST: TodoItems/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            if (_context.TodoItems == null)
            {
                return Problem("Entity set 'TodoContext.TodoItems'  is null.");
            }
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem != null)
            {
                _context.TodoItems.Remove(todoItem);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TodoItemExists(long id)
        {
          return (_context.TodoItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}