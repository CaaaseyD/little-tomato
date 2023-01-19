class TodosController < ApplicationController
  def new
    @todo = Todo.new
    # render 'todos/new'
  end

  # POST /todos
  def create
    # create the todo with form data (from params)
    @todo = Todo.new(todo_params)
    # Attach the goal to the todo
    @todo.user = @user
    # save
    if @todo.save
      # redirect if successful
      redirect_to root_path, notice: "Successfully created todo", status: :see_other
    else
      # render new again if not
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH /todos/:id
  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    redirect_to root_path, notice: "Todo updated successfully"
  end

  def destroy
    if @todo.destroy
    redirect_to root_path, notice: "Successfully deleted todo", status: :see_other
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :done)
  end

end
